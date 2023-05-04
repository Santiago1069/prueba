import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ForgotCredentialsComponent } from './components/forgot-credentials/forgot-credentials.component';
import { RecoverCredentialsComponent } from './components/recover-credentials/recover-credentials.component';
import { PreLoginComponent } from './components/pre-login/pre-login.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotCredentialsComponent,
    RecoverCredentialsComponent,
    PreLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
