import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/template/home/home.component';
import {ProfileComponent} from './modules/template/profile/profile.component';
import {SignupComponent} from './modules/template/signup/signup.component';
import {LandingComponent} from './modules/template/landing/landing.component';
import {LoginComponent} from './modules/template/login/login.component';

const routes: Routes = [
    {
        path: 'template',
        children: [
            {path: '', component: HomeComponent},
            {path: './user-profile', component: ProfileComponent},
            {path: './register', component: SignupComponent},
            {path: './landing', component: LandingComponent},
            {path: './login', component: LoginComponent}
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
