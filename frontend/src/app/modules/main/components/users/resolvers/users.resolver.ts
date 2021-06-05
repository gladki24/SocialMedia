import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {UserApiService} from "../../user/services/user-api.service";
import {Profile} from "../../user/models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<Profile[]> {

  public constructor(
      private readonly userApiService: UserApiService
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile[]> {
    return this.userApiService.getAllUsers();
  }
}
