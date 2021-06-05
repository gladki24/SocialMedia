import { Component, OnInit } from '@angular/core';
import {Profile} from "../user/models/profile.model";
import {ActivatedRoute} from "@angular/router";
import {MainActivityBase} from "../../classes/main-activity.abstract";
import {Icon} from "../../../shared/enums/icon.enum";

@Component({
  selector: 'ms-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends MainActivityBase{

  public readonly Icon = Icon;
  public search: string;

  private users: Profile[] = [];

  public constructor(
      route: ActivatedRoute
  ) {
    super('Wyszukaj innych użytkowników Yoodle\'a');

    route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  public getFoundUsers(): Profile[] {
    return this.users.filter(user => user.identifier.includes(this.search));
  }
}
