import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {UserApiService} from "../services/user-api.service";
import {Profile} from "../models/profile.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Profile> {

  public constructor(
      private readonly profileService: UserApiService
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> {
    const id = route.paramMap.get('id')

    return this.profileService.getAllUsers().pipe(
        map(response => response.find(user => user.identifier === id))
    )
  }
}
