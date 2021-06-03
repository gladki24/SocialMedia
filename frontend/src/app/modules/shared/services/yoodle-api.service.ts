import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CreateYoodleRequestModel } from '../models/yoodle/create-yoodle-request.model';
import { CreateYoodleResponse } from '../models/yoodle/create-yoodle-response.model';
import { map } from 'rxjs/operators';

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

  public create(request: CreateYoodleRequestModel): Observable<any> {
    return this._apiService.post(this._url + 'create', request)
      .pipe(
        map(res => new CreateYoodleResponse(res))
      )
  }

  public getFollowingFeed(): Observable<any> {
    return this._apiService.get(this._url + 'feed');
  }

  public getUserFeed(): Observable<any> {
    return this._apiService.get(this._url + 'my/feed');
  }
}
