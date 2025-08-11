import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrl: './ingresar-gasto.component.css'
})
export class IngresarGastoComponent implements OnInit{

  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService : PresupuestoService, private router: Router){
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = '';
  }

  ngOnInit(): void {
  }

  agregarGasto(){

    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;
    }

    if (this.nombreGasto === ''|| this.cantidad <= 0)  {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Nombre gasto o cantidad incorrecta';
    }else{

      // Creamos el objeto

      const GASTO = {
        nombre: this.nombreGasto,
      cantidad: this.cantidad
    }

      // Enviamos el objeto a los suscriptores via subject

      this._presupuestoService.agregarGasto(GASTO);

      // Reseteamos el formulario

      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }

  }
  verResumen(){
    this._presupuestoService.enviarListaGastos();
    this.router.navigate(['/resumen']);
  }
}
