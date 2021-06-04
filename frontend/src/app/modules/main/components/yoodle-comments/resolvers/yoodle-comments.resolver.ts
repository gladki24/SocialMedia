import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {YoodleApiService} from "../../../../shared/services/yoodle-api.service";

@Injectable({
    providedIn: 'root'
})
export class YoodleCommentsResolver implements Resolve<boolean> {

    public constructor(
        private yoodleService: YoodleApiService
    ) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.yoodleService.get(route.paramMap.get('link'));
    }
}
