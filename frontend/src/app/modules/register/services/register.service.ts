import { Injectable } from '@angular/core';
import { RegisterRequestFactoryService } from './register-request-factory.service';
import { RegisterApiService } from './register-api.service';
import { Observable } from 'rxjs';
import { RegisterResponseModel } from '../models/register-response.model';

@Injectable()
export class RegisterService {

  public constructor(
    private readonly requestFactory: RegisterRequestFactoryService,
    private readonly api: RegisterApiService
  ) { }

  public register(login: string, username: string, password: string): Observable<RegisterResponseModel> {
    const request = this.requestFactory.getRegisterRequest(login, password, username);
    return this.api.register(request);
  }
}
