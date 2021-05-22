import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {JwtService} from "../../shared/services/jwt.service";
import {NavigatorService} from "../../shared/services/navigator.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public constructor(
      private readonly jwtService: JwtService,
      private readonly navigatorService: NavigatorService
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.jwtService.hasToken()) {
      return true;
    }

    this.navigatorService.login();
    return false;
  }
}
