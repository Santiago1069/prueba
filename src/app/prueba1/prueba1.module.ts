import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Prueba1RoutingModule } from './prueba1-routing.module';
import { Prueba1Component } from './prueba1.component';


@NgModule({
  declarations: [
    Prueba1Component
  ],
  imports: [
    CommonModule,
    Prueba1RoutingModule
  ]
})
export class Prueba1Module { }
