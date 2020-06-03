import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SoftModule } from '../soft/soft.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SoftModule,
  ],
  providers: [FormsModule, FormBuilder],
})
export class LoginModule {}
