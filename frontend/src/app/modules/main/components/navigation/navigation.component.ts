import { Component, OnInit } from '@angular/core';
import { Icon } from '../../../shared/enums/icon.enum';
import { NavigationBuilderService } from './services/navigation-builder.service';
import { NavigationLinkViewModel } from './models/navigation-link-view.model';
import {JwtService} from "../../../shared/services/jwt.service";
import {AlertService} from "../../../shared/services/alert.service";
import {MatDialog} from "@angular/material/dialog";
import {YoodleModalComponent} from "../yoodle-modal/yoodle-modal.component";

@Component({
  selector: 'ms-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.scss' ],
  providers: [
    NavigationBuilderService
  ]
})
export class NavigationComponent implements OnInit {

  public readonly Icon = Icon;
  public links: NavigationLinkViewModel[];

  public constructor(
    private readonly _builder: NavigationBuilderService,
    private readonly _jwtService: JwtService,
    private readonly _alertService: AlertService,
    private readonly _dialogService: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.links = this._builder
      .add({
        name: 'Home',
        url: '/home',
        icon: this.Icon.Home
      })
      .add({
        name: 'Powiadomienia',
        url: '/notifications',
        icon: this.Icon.Notifications
      })
      .add({
        name: 'Profil',
        url: '/profile',
        icon: this.Icon.Profile
      })
      .build();
  }

  public logout(): void {
    this._alertService.notifyInfo('Wylogowanie', 'Użytkownik został wylogowany');
    this._jwtService.clearToken();
  }

  public openYoodleModal(): void {
    this._dialogService.open(YoodleModalComponent);
  }
}
