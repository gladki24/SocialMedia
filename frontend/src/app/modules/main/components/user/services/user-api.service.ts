import { Injectable } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {Observable} from "rxjs";
import {Profile} from "../models/profile.model";
import {map, tap} from 'rxjs/operators';

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

  public getCurrentUserAllFollowedUsers(): Observable<Profile[]> {
    return this.apiService.get('user/followed/all').pipe(
        map(res => res.map(user => new Profile(user)))
    )
  }

  public getCurrentUserAllFollowingUsers(): Observable<Profile[]> {
    return this.apiService.get('user/following/all').pipe(
        map(res => res.map(user => new Profile(user)))
    )
  }

  public getUserAllFollowedUsers(id: string): Observable<Profile[]> {
    return this.apiService.get('user/followed/' + id).pipe(
        map(res => res.map(user => new Profile(user)))
    )
  }

  public getUserAllFollowingUsers(id: string): Observable<Profile[]> {
    return this.apiService.get('user/following/' + id).pipe(
        map(res => res.map(user => new Profile(user)))
    )
  }


  public getAllUsers(): Observable<Profile[]> {
    return this.apiService.get('user/all').pipe(
        map(res => res.map(user => new Profile(user)))
    )
  }

  public follow(id: string): Observable<void> {
    return this.apiService.post('user/follow/' + id);
  }

  public unfollow(id: string): Observable<void> {
    return this.apiService.post('user/unfollow/' + id);
  }
}
