import { Injectable } from '@angular/core';
import { YoodleApiService } from '../../../../shared/services/yoodle-api.service';
import { YoodleRequestFactoryService } from '../../../../shared/services/yoodle-request-factory.service';
import { Observable } from 'rxjs';
import {Tweet} from "../../../../shared/models/tweet.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YoodleService {

  public constructor(
    private readonly _apiService: YoodleApiService,
    private readonly _requestFactory: YoodleRequestFactoryService
  ) { }

  public create(text: string): Observable<Tweet> {
    const request = this._requestFactory.getCreateRequest(null, text);

    return this._apiService.create(request).pipe(
        map(res => new Tweet(res))
    );
  }

  public comment(text: string, parentId: string): Observable<Tweet> {
    const request = this._requestFactory.getCreateRequest(parentId, text);

    return this._apiService.create(request).pipe(
        map(res => new Tweet(res))
    )
  }

  public getUserFeed(): Observable<Tweet[]> {
    return this._apiService.getUserFeed();
  }

  public getFeed(): Observable<Tweet[]> {
    return this._apiService.getFollowingFeed();
  }
}
