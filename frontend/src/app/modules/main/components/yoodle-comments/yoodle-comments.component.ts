import { Component, OnInit } from '@angular/core';
import {MainActivityBase} from "../../classes/main-activity.abstract";
import {Tweet} from "../../../shared/models/tweet.model";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {YoodleService} from "../yoodle-input/services/yoodle.service";
import {AlertService} from "../../../shared/services/alert.service";
import {NavigatorService} from "../../../shared/services/navigator.service";

@Component({
  selector: 'ms-yoodle-comments',
  templateUrl: './yoodle-comments.component.html',
  styleUrls: ['./yoodle-comments.component.scss']
})
export class YoodleCommentsComponent extends MainActivityBase {

  public yoodle: Tweet;

  public commentForm = new FormGroup({
    text: new FormControl('')
  });

  public constructor(
      private readonly route: ActivatedRoute,
      private readonly yoodleService: YoodleService,
      private readonly alertService: AlertService,
      private readonly navigator: NavigatorService
  ) {
    super('Komentarze Yoodla')

    this.route.data.subscribe(data => {
      this.yoodle = data['yoodle'];
    });
  }

  public comment(): void {
    const text = this.commentForm.value['text'];

    this.commentForm.setValue({
      text: ''
    }, {
      emitEvent: false
    });

    this.yoodleService.comment(text, this.yoodle.link).subscribe(() => {
      this.alertService.notifySuccess('Super', 'Skomentowałeś tego Yoodla!');
      this.navigator.yoodle(this.yoodle.link);
    });
  }
}
