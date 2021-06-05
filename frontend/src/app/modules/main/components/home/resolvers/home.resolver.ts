import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {YoodleService} from "../../yoodle-input/services/yoodle.service";
import {Tweet} from "../../../../shared/models/tweet.model";

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<Tweet[]> {

  public constructor(
      private readonly service: YoodleService
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tweet[]> {
    return this.service.getFeed();
  }
}
