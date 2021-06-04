import { Injectable } from '@angular/core';
import {EmotionApiService} from "./emotion-api.service";
import {EmotionRequestFactoryService} from "./emotion-request-factory.service";
import {EmotionType} from "../enums/emotion.enum";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmotionService {

  public constructor(
      private readonly apiService: EmotionApiService,
      private readonly requestFactory: EmotionRequestFactoryService
  ) { }

  public create(link: string, emotion: EmotionType): Observable<void> {
    const request = this.requestFactory.getCreateEmotionRequest(link, emotion);
    return this.apiService.create(request);
  }
}
