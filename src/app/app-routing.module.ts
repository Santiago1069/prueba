import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'companies', loadChildren: () => import('./modules/companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'prueba', loadChildren: () => import('./modules/prueba/prueba.module').then(m => m.PruebaModule) },
  { path: 'prueba1', loadChildren: () => import('./prueba1/prueba1.module').then(m => m.Prueba1Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
