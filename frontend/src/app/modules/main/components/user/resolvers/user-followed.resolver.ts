import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProfileService} from "../services/profile.service";
import {Profile} from "../models/profile.model";

@Injectable({
    providedIn: 'root'
})
export class UserFollowedResolver implements Resolve<Profile[]> {

    public constructor(
        private readonly service: ProfileService
    ) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile[]> {
        const id = route.paramMap.get('id');
        return this.service.followed(id);
    }
}
