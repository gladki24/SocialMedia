import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MsLoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    MsLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoginModule { }
