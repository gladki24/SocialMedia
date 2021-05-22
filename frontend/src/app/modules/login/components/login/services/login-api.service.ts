import { Injectable } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {LoginRequest} from "../models/login-request.model";
import {Observable} from "rxjs";
import {LoginResponse} from "../models/login-response.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  public constructor(
      private readonly api: ApiService
  ) { }

  public login(request: LoginRequest): Observable<LoginResponse> {
    return this.api.post<LoginResponse>('account/authenticate', request).pipe(
        map(res => new LoginResponse(res))
    )
  }
}
