import { Component, OnInit } from '@angular/core';
import { Icon } from '../../../shared/enums/icon.enum';
import { NavigationBuilderService } from './services/navigation-builder.service';
import { NavigationLinkViewModel } from './models/navigation-link-view.model';

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
    private readonly _builder: NavigationBuilderService
  ) {
  }

  public ngOnInit(): void {
    console.log(Icon);

    this.links = this._builder
      .add({
        name: 'Home',
        url: '/home',
        icon: this.Icon.Home
      })
      .add({
        name: 'Notifications',
        url: '/notifications',
        icon: this.Icon.Notifications
      })
      .add({
        name: 'Profile',
        url: '/profile',
        icon: this.Icon.Profile
      })
      .build();

    console.log(this.links);
  }

}
