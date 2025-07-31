import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent implements OnInit {

  presupuesto = 0;

  constructor(private _presupuestoService: PresupuestoService, private router: Router){}
  
  ngOnInit():void{

    if(this._presupuestoService.presupuesto === 0){
      this.router.navigate(['/ingresarPresupuesto']);
    }
  }

}
