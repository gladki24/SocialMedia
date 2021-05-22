import { Injectable } from '@angular/core';
import {LoginApiService} from "./login-api.service";
import {LoginRequestFactoryService} from "./login-request-factory.service";
import {Observable} from "rxjs";
import {JwtService} from "../../../../shared/services/jwt.service";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
      private readonly apiService: LoginApiService,
      private readonly requestFactory: LoginRequestFactoryService,
      private readonly jwtService: JwtService
  ) { }

  public login(username: string, password: string): Observable<void> {
    const request = this.requestFactory.getLoginRequest(username, password);
    return this.apiService.login(request)
        .pipe(
            tap(response => this.jwtService.setToken(response.token)),
            map(() => null)
        )
  }
}
