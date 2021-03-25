import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './modules/template/profile/profile.component';
import { SignupComponent } from './modules/template/signup/signup.component';
import { LandingComponent } from './modules/template/landing/landing.component';
import { LoginComponent } from './modules/template/login/login.component';
import { MainComponent } from './modules/main/components/main/main.component';
import { UserComponent } from './modules/main/components/user/user.component';
import { NotificationsComponent } from './modules/main/components/notifications/notifications.component';
import { HomeComponent } from './modules/main/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'template',
    children: [
      { path: '', component: HomeComponent },
      { path: './user-profile', component: ProfileComponent },
      { path: './register', component: SignupComponent },
      { path: './landing', component: LandingComponent },
      { path: './login', component: LoginComponent }
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
