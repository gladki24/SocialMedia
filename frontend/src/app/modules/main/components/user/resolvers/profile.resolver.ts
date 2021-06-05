import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Profile} from "../models/profile.model";
import {UserApiService} from "../services/user-api.service";
import {UserService} from "../../../../shared/services/user.service";
import {isDefined} from "../../../../shared/utils";

@Injectable({
    providedIn: 'root'
})
export class ProfileResolver implements Resolve<Profile> {

    public constructor(
        private readonly _userService: UserService
    ) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> {
        return this._userService.loadAndSetUserProfile();
    }
}
