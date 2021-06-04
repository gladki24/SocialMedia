import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {CreateEmotionRequest} from "../models/emotion-api/create-emotion-request.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmotionApiService {

  public constructor(
      private readonly apiService: ApiService
  ) { }

  public create(request: CreateEmotionRequest): Observable<any> {
    return this.apiService.post('emotion/create', request);
  }
}
