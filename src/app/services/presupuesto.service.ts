import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto: number;
  restante: number;
  private gastos$ = new Subject<any>();

  constructor() { 
    this.presupuesto = 0;
    this.restante = 0;
  }

  // Metodo que emite datos 
  
  agregarGasto(gasto: any) {
    this.restante = this.restante - gasto.cantidad;
    this.gastos$.next(gasto);
  }

  /* A este metodo se van a suscribir todos los componentes
      que quieran escuchar los cambios de gasto$  */
  getGastos(): Observable<any> {
    return this.gastos$.asObservable();
  }
}
