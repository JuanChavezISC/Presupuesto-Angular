import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

private listaGastos: any[ ] = [];

  presupuesto: number;
  restante: number;
  private gastos$ = new Subject<any>();
  private gasto2$ = new BehaviorSubject<any[]>([]);

  constructor() { 
    this.presupuesto = 0;
    this.restante = 0;
  }

  // Metodo que emite datos 
  
  agregarGasto(gasto: any) {
    this.restante = this.restante - gasto.cantidad;
    this.listaGastos.push(gasto);

    this.gastos$.next(gasto);
  }

  enviarListaGastos(){
    this.gasto2$.next(this.listaGastos);
  }

  /* A este metodo se van a suscribir todos los componentes
      que quieran escuchar los cambios de gasto$  */
  getGastos(): Observable<any> {
    return this.gastos$.asObservable();
  }

  getListaGastos(): Observable <any>{
    return this.gasto2$.asObservable();
  }
}
