import { Injectable } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {Observable} from "rxjs";
import {Profile} from "../models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  public constructor(
      private apiService: ApiService
  ) { }

  public get(): Observable<Profile> {
    return this.apiService.get('user/profile');
  }
}
