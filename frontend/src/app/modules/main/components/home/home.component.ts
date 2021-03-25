import { Component, OnInit } from '@angular/core';
import { MainActivityBase } from '../../classes/main-activity.abstract';

@Component({
  selector: 'ms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
  extends MainActivityBase
  implements OnInit {

  public constructor() {
    super('Home');
  }

  ngOnInit(): void {
  }

}
