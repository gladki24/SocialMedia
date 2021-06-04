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
import { HttpClientModule } from '@angular/common/http';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AlertComponent } from './components/alert/alert.component';
import { CardComponent } from './components/card/card.component';
import { YoodleComponent } from './components/yoodle/yoodle.component';
import { EmotionsComponent } from './components/emotions/emotions.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ButtonDirective,
    LinkDirective,
    InputDirective,
    BadgeComponent,
    PillComponent,
    ProgressbarComponent,
    TabsComponent,
    IconComponent,
    AlertsComponent,
    AlertComponent,
    CardComponent,
    YoodleComponent,
    EmotionsComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        NgbModule,
        MatIconModule,
        RouterModule
    ],
    exports: [
        ButtonDirective,
        LinkDirective,
        IconComponent,
        InputDirective,
        AlertsComponent,
        CardComponent,
        YoodleComponent
    ]
})
export class  SharedModule {
}
