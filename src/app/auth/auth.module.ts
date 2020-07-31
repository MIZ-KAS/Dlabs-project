import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent, SignUpComponent, ResetPasswordComponent
  ]
})
export class AuthModule { }
