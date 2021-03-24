import {Component, Input} from '@angular/core';

@Component({
  selector: 'ms-pill',
  templateUrl: './pill.component.html'
})
export class PillComponent {
  @Input() public isActive: boolean = false;
  @Input() public niIcon: string;
}
