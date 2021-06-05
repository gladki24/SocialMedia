import {Injectable} from '@angular/core';
import {EmotionApiService} from "./emotion-api.service";
import {EmotionRequestFactoryService} from "./emotion-request-factory.service";
import {EmotionType} from "../enums/emotion.enum";
import {Observable} from "rxjs";
import {Emotion} from "../models/emotion";
import {YoodleService} from "../../main/components/yoodle-input/services/yoodle.service";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class EmotionService {

    public constructor(
        private readonly apiService: EmotionApiService,
        private readonly yoodleService: YoodleService,
        private readonly requestFactory: EmotionRequestFactoryService
    ) {
    }

    public create(link: string, emotion: EmotionType): Observable<Emotion> {
        const request = this.requestFactory.getCreateEmotionRequest(link, emotion);
        return this.apiService.create(request);
    }

    public getEmotions(link: string): Observable<Emotion[]> {
      return this.yoodleService.get(link).pipe(
          map(res => res.emotions.map(emotion => new Emotion(emotion)))
      )
    }
}
