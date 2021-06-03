import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../template/template.module';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationLinkComponent } from './components/navigation/components/navigation-link/navigation-link.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { YoodleInputComponent } from './components/yoodle-input/yoodle-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    UserComponent,
    NavigationComponent,
    NavigationLinkComponent,
    NotificationsComponent,
    YoodleInputComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TemplateModule,
    ReactiveFormsModule
  ],
    exports: [
        MainComponent,
        NotificationsComponent
    ]
})
export class MainModule {
}
