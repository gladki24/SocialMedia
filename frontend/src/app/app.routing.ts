import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './modules/template/profile/profile.component';
import { SignupComponent } from './modules/template/signup/signup.component';
import { LandingComponent } from './modules/template/landing/landing.component';
import { MainComponent } from './modules/main/components/main/main.component';
import { UserComponent } from './modules/main/components/user/user.component';
import { NotificationsComponent } from './modules/main/components/notifications/notifications.component';
import { HomeComponent } from './modules/main/components/home/home.component';
import { MsLoginComponent } from './modules/login/components/login/login.component';
import { MsRegisterComponent } from './modules/register/components/register/register.component';
import {AuthGuard} from "./modules/main/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'profile',
        component: UserComponent
      }
    ]
  },
  {
    path: 'register',
    component: MsRegisterComponent
  },
  {
    path: 'login',
    component: MsLoginComponent
  },
  {
    path: 'template',
    children: [
      { path: '', component: HomeComponent },
      { path: './user-profile', component: ProfileComponent },
      { path: './register', component: SignupComponent },
      { path: './landing', component: LandingComponent },
      { path: './login', component: MsLoginComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule {
}
