import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prueba1Component } from './prueba1.component';

const routes: Routes = [{ path: 'prueba', component: Prueba1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Prueba1RoutingModule { }
