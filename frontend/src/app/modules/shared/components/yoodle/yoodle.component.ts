import {Component, Input} from '@angular/core';
import {Tweet} from "../../models/tweet.model";
import {EmotionService} from "../../services/emotion.service";
import {EmotionType} from "../../enums/emotion.enum";
import {flatMap, tap} from "rxjs/operators";

@Component({
  selector: 'ms-yoodle',
  templateUrl: './yoodle.component.html',
  styleUrls: ['./yoodle.component.scss']
})
export class YoodleComponent {

  @Input() public yoodle: Tweet
  @Input() public readOnly: boolean = false;

  public constructor(
      private emotionService: EmotionService
  ) { }

  public saveAndUpdateEmotions(emotionType: EmotionType): void {
    this.emotionService.create(this.yoodle.link, emotionType)
        .pipe(
            flatMap(() => this.emotionService.getEmotions(this.yoodle.link)),
            tap(emotions => this.yoodle.emotions = emotions)
        ).subscribe();
  }
}
