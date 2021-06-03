import { Injectable } from '@angular/core';
import { CreateYoodleRequestModel } from '../models/yoodle/create-yoodle-request.model';

@Injectable({
  providedIn: 'root'
})
export class YoodleRequestFactoryService {

  public getCreateRequest(parentRequestId: string, text: string): CreateYoodleRequestModel {
    const request = new CreateYoodleRequestModel();
    request.parentTweetLink = parentRequestId;
    request.text = text;
    return request;
  }
}
