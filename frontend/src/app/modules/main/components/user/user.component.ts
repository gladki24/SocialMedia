import { Component, OnInit } from '@angular/core';
import { MainActivityBase } from '../../classes/main-activity.abstract';

@Component({
  selector: 'ms-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent
  extends MainActivityBase
  implements OnInit {

  public constructor() {
    super('Profil');
  }

  ngOnInit(): void {
  }

}
