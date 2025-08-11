import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  presupuesto: number;
  restante: number;
  listGastos: any [] = [];

  constructor(private _presupuestoService: PresupuestoService,
                private router: Router
  ){
    this.presupuesto = 0;
    this.restante = 0;
    this.subscription = this._presupuestoService.getListaGastos().subscribe(data =>{
      this.listGastos = data;
    })
  }

  ngOnInit(): void {

    if(this._presupuestoService.presupuesto === 0){
      this.router.navigate(['/ingresarPresupuesto']);
    }else{
      
      this.presupuesto = this._presupuestoService.presupuesto;
      this.restante = this._presupuestoService.restante;
    }
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
