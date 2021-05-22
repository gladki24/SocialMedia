import { Injectable } from '@angular/core';
import { RegisterRequestModel } from '../models/register-request.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterRequestFactoryService {

  public getRegisterRequest(
    login: string,
    password: string,
    username: string
  ): RegisterRequestModel {
    const request = new RegisterRequestModel();
    request.identifier = login;
    request.password = password;
    request.username = username;
    return request;
  }
}
