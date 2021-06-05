import { Component, OnInit } from '@angular/core';
import { MainActivityBase } from '../../classes/main-activity.abstract';
import {ProfileService} from "./services/profile.service";
import { ActivatedRoute } from '@angular/router';
import { Profile } from './models/profile.model';
import {Icon} from "../../../shared/enums/icon.enum";
import {ProfileResolver} from "./resolvers/profile.resolver";
import {isDefined} from "../../../shared/utils";
import {flatMap} from "rxjs/operators";

@Component({
  selector: 'ms-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [
      ProfileService
  ]
})
export class UserComponent extends MainActivityBase {

  public readonly Icon = Icon;
  public profile: Profile;
  public loggedUserProfile: Profile;

  public currentUserFollowedProfiles: Profile[];

  public followingProfiles: Profile[];
  public followedProfiles: Profile[];

  public get isLoggedUserProfile(): boolean {
    return this.profile.id === this.loggedUserProfile.id;
  }

  public get followingCount(): number {
    return this.followingProfiles.length;
  }

  public get followedCount(): number {
    return this.followedProfiles.length;
  }

  public get isAlreadyFollowed(): boolean {
    const profile = this.currentUserFollowedProfiles.find(profile => {
      return profile.id === this.profile.id;
    });

    return isDefined(profile);
  }

  public constructor(
      private readonly service: ProfileService,
      private readonly route: ActivatedRoute
  ) {
    super('Profil');

    this.route.data.subscribe(data => {
      this.profile = data['profile'];
      this.loggedUserProfile = data['loggedUserProfile'];
      this.followedProfiles = data['followed'];
      this.followingProfiles = data['following'];
      this.currentUserFollowedProfiles = data['currentUserFollowed']
    });
  }

  public follow(): void {
    this.service.follow(this.profile.identifier)
        .pipe(
            flatMap(followingProfiles => this.followingProfiles = followingProfiles),
            flatMap(() => this.service.currentUserFollowed())
        ).subscribe(currentUserFollowed => this.currentUserFollowedProfiles = currentUserFollowed);
  }

  public unfollow(): void {
    this.service.unfollow(this.profile.identifier)
        .pipe(
            flatMap(followingProfiles => this.followingProfiles = followingProfiles),
            flatMap(() => this.service.currentUserFollowed())
        ).subscribe(currentUserFollowed => this.currentUserFollowedProfiles = currentUserFollowed);
  }
}
