import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CreateYoodleRequestModel } from '../models/yoodle/create-yoodle-request.model';
import { CreateYoodleResponse } from '../models/yoodle/create-yoodle-response.model';
import { map } from 'rxjs/operators';
import {Tweet} from "../models/tweet.model";

@Injectable({
  providedIn: 'root'
})
export class YoodleApiService {

  private readonly _url = 'tweet/';

  public constructor(
    private readonly _apiService: ApiService
  ) { }

  public getAll(id: string): Observable<any> {
    return this._apiService.get(this._url + 'all/' + id);
  }

  public get(link: string): Observable<Tweet> {
    return this._apiService.get(this._url + 'get/' + link).pipe(
        map(res => new Tweet(res))
    )
  }

  public create(request: CreateYoodleRequestModel): Observable<Tweet> {
    return this._apiService.post(this._url + 'create', request)
      .pipe(
        map(res => new Tweet(res))
      )
  }

  public getFollowingFeed(): Observable<Tweet[]> {
    return this._apiService.get(this._url + 'feed').pipe(
        map(res => res.map(tweet => new Tweet(tweet)))
    );
  }

  public getUserFeed(): Observable<Tweet[]> {
    return this._apiService.get(this._url + 'my/feed').pipe(
        map(res => res.map(tweet => new Tweet(tweet)))
    );
  }
}
