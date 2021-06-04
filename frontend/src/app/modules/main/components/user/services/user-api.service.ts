import { Injectable } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {Observable} from "rxjs";
import {Profile} from "../models/profile.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  public constructor(
      private apiService: ApiService
  ) { }

  public getUserProfile(): Observable<Profile> {
    return this.apiService.get('user/profile')
      .pipe(
        map(res => new Profile(res))
      )
  }

  public getUser(id: string): Observable<Profile> {
    return this.apiService.get('user/' + id).pipe(
        map(res => new Profile(res))
    )
  }

  public getAllFollowedUsers(): Observable<Profile[]> {
    return this.apiService.get('user/followed/all').pipe(
        map(res => res.map(user => new Profile(user)))
    )
  }

  public getAllFollowingUsers(): Observable<Profile[]> {
    return this.apiService.get('user/following/all').pipe(
        map(res => res.map(user => new Profile(user)))
    )
  }

  public getAllUsers(): Observable<Profile[]> {
    return this.apiService.get('user/all').pipe(
        map(res => res.map(user => new Profile(user)))
    )
  }
}
