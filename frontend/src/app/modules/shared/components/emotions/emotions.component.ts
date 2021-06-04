import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Icon} from "../../enums/icon.enum";
import {EmotionType} from "../../enums/emotion.enum";
import {Tweet} from "../../models/tweet.model";

@Component({
  selector: 'ms-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.scss']
})
export class EmotionsComponent implements OnInit {

  @Input() public tweet: Tweet;
  @Input() public disabled: boolean = false;
  @Output() public readonly emotionClicked = new EventEmitter<EmotionType>();

  public readonly Icon = Icon;
  public readonly Emotion = EmotionType;

  constructor() { }

  ngOnInit(): void {
  }

}
