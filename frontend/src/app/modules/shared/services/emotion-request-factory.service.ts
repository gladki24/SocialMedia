import { Injectable } from '@angular/core';
import {CreateEmotionRequest} from "../models/emotion-api/create-emotion-request.model";
import {EmotionType} from "../enums/emotion.enum";

@Injectable({
  providedIn: 'root'
})
export class EmotionRequestFactoryService {

  public getCreateEmotionRequest(link: string, emotionType: EmotionType): CreateEmotionRequest {
    const request = new CreateEmotionRequest();
    request.type = emotionType;
    request.tweetLink = link;
    return request;
  }
}
