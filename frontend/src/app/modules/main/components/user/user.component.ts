import { Component, OnInit } from '@angular/core';
import { MainActivityBase } from '../../classes/main-activity.abstract';
import {ProfileService} from "./services/profile.service";

@Component({
  selector: 'ms-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [
      ProfileService
  ]
})
export class UserComponent
  extends MainActivityBase
  implements OnInit {

  public constructor(
      private readonly service: ProfileService
  ) {
    super('Profil');
  }

  public ngOnInit(): void {
  }

}
