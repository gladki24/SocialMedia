import { Component, Input } from '@angular/core';
import { Icon } from '../../enums/icon.enum';

@Component({
  selector: 'ms-icon',
  templateUrl: './icon.component.html',
  styleUrls: [
    './icon.component.scss'
  ]
})
export class IconComponent {
  @Input() public icon: Icon;
}
