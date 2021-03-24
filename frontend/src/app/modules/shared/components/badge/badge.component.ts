import {Component, Input} from '@angular/core';
import {BadgeColor} from '../../types/badge';

@Component({
  selector: 'ms-badge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent {

  @Input() public text: string;
  @Input() public color: BadgeColor;

  public isPrimary(): boolean {
    return this.color === 'primary';
  }

  public isSuccess(): boolean {
    return this.color === 'success';
  }

  public isDanger(): boolean {
    return this.color === 'danger';
  }

  public isWarning(): boolean {
    return this.color === 'warning';
  }

  public isInfo(): boolean {
    return this.color === 'info';
  }
}
