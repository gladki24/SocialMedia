import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './directive/button.directive';
import { LinkDirective } from './directive/link.directive';
import { InputDirective } from './directive/input.directive';
import { BadgeComponent } from './components/badge/badge.component';
import { PillComponent } from './components/pill/pill.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './components/tabs/tabs.component';
import { IconComponent } from './components/icon/icon.component';


@NgModule({
  declarations: [
    ButtonDirective,
    LinkDirective,
    InputDirective,
    BadgeComponent,
    PillComponent,
    ProgressbarComponent,
    TabsComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ButtonDirective,
    LinkDirective,
    IconComponent,
    InputDirective
  ]
})
export class SharedModule {
}
