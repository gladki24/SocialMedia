import {Component, OnInit} from '@angular/core';
import {Icon} from '../../../shared/enums/icon.enum';
import {NavigationBuilderService} from './services/navigation-builder.service';
import {NavigationLinkViewModel} from './models/navigation-link-view.model';
import {JwtService} from "../../../shared/services/jwt.service";
import {AlertService} from "../../../shared/services/alert.service";
import {MatDialog} from "@angular/material/dialog";
import {YoodleModalComponent} from "../yoodle-modal/yoodle-modal.component";
import {UserService} from "../../../shared/services/user.service";

@Component({
    selector: 'ms-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
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
        private readonly _dialogService: MatDialog,
        private readonly _userService: UserService
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
            .add({
                name: 'Wyszukaj',
                url: '/users',
                icon: this.Icon.Search
            })
            .build();
    }

    public logout(): void {
        this._alertService.notifyInfo('Wylogowanie', 'Użytkownik został wylogowany');
        this._jwtService.clearToken();
        this._userService.clearUserProfile();
    }

    public openYoodleModal(): void {
        this._dialogService.open(YoodleModalComponent);
    }
}
