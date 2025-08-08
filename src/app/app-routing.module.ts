import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes 
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { ResumenComponent } from './components/resumen/resumen.component';
const routes: Routes = [
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  { path: 'gastos', component: GastosComponent},
  { path: 'resumen', component: ResumenComponent},
  { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
