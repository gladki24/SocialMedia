import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';
import { RegisterRequestModel } from '../models/register-request.model';
import { RegisterResponseModel } from '../models/register-response.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  public constructor(
    private readonly api: ApiService
  ) { }

  public register(request: RegisterRequestModel): Observable<RegisterResponseModel> {
    return this.api.post<RegisterResponseModel>('account/register', request).pipe(
      map(res => new RegisterResponseModel(res))
    )
  }
}
