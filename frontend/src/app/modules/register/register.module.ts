import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsRegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [MsRegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule { }
