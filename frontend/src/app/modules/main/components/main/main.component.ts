import { Component } from '@angular/core';
import { MainActivityBase } from '../../classes/main-activity.abstract';

@Component({
  selector: 'ms-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent {

  public title: string;

  public setTitle(data: MainActivityBase): void {
    this.title = data.title;
  }
}
