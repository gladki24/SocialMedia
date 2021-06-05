import { Component, OnInit } from '@angular/core';
import { MainActivityBase } from '../../classes/main-activity.abstract';

@Component({
  selector: 'ms-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent
  extends MainActivityBase
  implements OnInit {

  public constructor() {
    super('Powiadomienia');
  }

  // TODO Tutaj trzeba zrobić powiadomienia
  ngOnInit(): void {
  }

}
