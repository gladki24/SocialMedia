import { Injectable } from '@angular/core';
import {LoginRequest} from "../models/login-request.model";

@Injectable({
  providedIn: 'root'
})
export class LoginRequestFactoryService {
  public getLoginRequest(username: string, password: string): LoginRequest {
    const request = new LoginRequest();
    request.username = username;
    request.password = password;
    return request;
  }
}
