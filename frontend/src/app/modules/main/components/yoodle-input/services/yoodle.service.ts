import { Injectable } from '@angular/core';
import { YoodleApiService } from '../../../../shared/services/yoodle-api.service';
import { YoodleRequestFactoryService } from '../../../../shared/services/yoodle-request-factory.service';
import { Observable } from 'rxjs';
import { CreateYoodleResponse } from '../../../../shared/models/yoodle/create-yoodle-response.model';

@Injectable({
  providedIn: 'root'
})
export class YoodleService {

  public constructor(
    private readonly _apiService: YoodleApiService,
    private readonly _requestFactory: YoodleRequestFactoryService
  ) { }

  public create(text: string): Observable<CreateYoodleResponse> {
    const request = this._requestFactory.getCreateRequest(null, text);

    return this._apiService.create(request);
  }
}
