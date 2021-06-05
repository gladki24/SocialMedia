import { Injectable } from '@angular/core';
import {Profile} from "../models/profile.model";
import {UserApiService} from "./user-api.service";
import {Observable} from "rxjs";
import {flatMap, tap} from "rxjs/operators";
import {AlertService} from "../../../../shared/services/alert.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public constructor(
      private readonly apiService: UserApiService,
      private readonly alertService: AlertService
  ) {
  }

  public follow(id: string): Observable<Profile[]> {
    return this.apiService.follow(id).pipe(
        tap(() => this.alertService.notifySuccess('Fajen!', `Zaobserwowałeś profil użytkownika ${id}`)),
        flatMap(() => this.following(id))
    )
  }

  public unfollow(id: string): Observable<Profile[]> {
    return this.apiService.unfollow(id).pipe(
        tap(() => this.alertService.notifyDefault('Ok!', `Już nie obserwujesz ${id}`)),
        flatMap(() => this.following(id))
    )
  }

  public currentUserFollowed(): Observable<Profile[]> {
    return this.apiService.getCurrentUserAllFollowedUsers();
  }

  public currentUserFollowing(): Observable<Profile[]> {
    return this.apiService.getCurrentUserAllFollowingUsers();
  }

  public followed(id: string): Observable<Profile[]> {
    return this.apiService.getUserAllFollowedUsers(id);
  }

  public following(id: string): Observable<Profile[]> {
    return this.apiService.getUserAllFollowingUsers(id);
  }
}
