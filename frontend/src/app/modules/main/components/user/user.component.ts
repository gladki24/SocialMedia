import { Component, OnInit } from '@angular/core';
import { MainActivityBase } from '../../classes/main-activity.abstract';
import {ProfileService} from "./services/profile.service";
import { ActivatedRoute } from '@angular/router';
import { Profile } from './models/profile.model';

@Component({
  selector: 'ms-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [
      ProfileService
  ]
})
export class UserComponent extends MainActivityBase {

  public profile: Profile;

  public constructor(
      private readonly service: ProfileService,
      private readonly route: ActivatedRoute
  ) {
    super('Profil');

    this.route.data.subscribe(data => {
      this.profile = data['profile'];
    });
  }

}
