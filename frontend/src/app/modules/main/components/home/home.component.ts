import { Component, OnInit } from '@angular/core';
import { MainActivityBase } from '../../classes/main-activity.abstract';
import {Tweet} from "../../../shared/models/tweet.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
  extends MainActivityBase
  implements OnInit {

  public feed: Tweet[] = [];

  public constructor(
      private readonly route: ActivatedRoute
  ) {
    super('Home');

    this.route.data.subscribe(data => {
      this.feed = data['feed'];
    });
  }

  ngOnInit(): void {
  }

}
