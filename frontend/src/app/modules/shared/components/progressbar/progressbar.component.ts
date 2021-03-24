import {Component, Input} from '@angular/core';
import {ProgressbarType} from '../../types/progressbar';

@Component({
  selector: 'ms-progressbar',
  templateUrl: './progressbar.component.html'
})
export class ProgressbarComponent  {
  @Input() public label: string;
  @Input() public type: ProgressbarType;
  @Input() public value: number;
}
