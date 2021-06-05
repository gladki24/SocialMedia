import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './modules/template/profile/profile.component';
import {SignupComponent} from './modules/template/signup/signup.component';
import {LandingComponent} from './modules/template/landing/landing.component';
import {MainComponent} from './modules/main/components/main/main.component';
import {UserComponent} from './modules/main/components/user/user.component';
import {NotificationsComponent} from './modules/main/components/notifications/notifications.component';
import {HomeComponent} from './modules/main/components/home/home.component';
import {MsLoginComponent} from './modules/login/components/login/login.component';
import {MsRegisterComponent} from './modules/register/components/register/register.component';
import {AuthGuard} from "./modules/main/guards/auth.guard";
import {ProfileResolver} from "./modules/main/components/user/resolvers/profile.resolver";
import {YoodleCommentsComponent} from "./modules/main/components/yoodle-comments/yoodle-comments.component";
import {YoodleCommentsResolver} from "./modules/main/components/yoodle-comments/resolvers/yoodle-comments.resolver";
import {HomeResolver} from "./modules/main/components/home/resolvers/home.resolver";
import {UsersComponent} from "./modules/main/components/users/users.component";
import {UsersResolver} from "./modules/main/components/users/resolvers/users.resolver";
import {UserResolver} from "./modules/main/components/user/resolvers/user.resolver";
import {CurrentUserFollowedResolver} from "./modules/main/components/user/resolvers/current-user-followed.resolver";
import {CurrentUserFollowingResolver} from "./modules/main/components/user/resolvers/current-user-following.resolver";
import {UserFollowedResolver} from "./modules/main/components/user/resolvers/user-followed.resolver";
import {UserFollowingResolver} from "./modules/main/components/user/resolvers/user-following.resolver";

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
                component: HomeComponent,
                resolve: {
                    feed: HomeResolver
                }
            },
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'profile',
                component: UserComponent,
                resolve: {
                    profile: ProfileResolver,
                    loggedUserProfile: ProfileResolver,
                    followed: CurrentUserFollowedResolver,
                    following: CurrentUserFollowingResolver,
                    currentUserFollowed: CurrentUserFollowedResolver
                },
                runGuardsAndResolvers: 'always',
            },
            {
                path: 'users/:id',
                component: UserComponent,
                resolve: {
                    profile: UserResolver,
                    loggedUserProfile: ProfileResolver,
                    followed: UserFollowedResolver,
                    following: UserFollowingResolver,
                    currentUserFollowed: CurrentUserFollowedResolver
                },
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'yoodle/:link',
                component: YoodleCommentsComponent,
                resolve: {
                    yoodle: YoodleCommentsResolver,
                    loggedUserProfile: ProfileResolver
                },
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'users',
                component: UsersComponent,
                resolve: {
                    users: UsersResolver
                },
                runGuardsAndResolvers: 'always'
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
            {path: '', component: HomeComponent},
            {path: './user-profile', component: ProfileComponent},
            {path: './register', component: SignupComponent},
            {path: './landing', component: LandingComponent},
            {path: './login', component: MsLoginComponent}
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            onSameUrlNavigation: 'reload'
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
