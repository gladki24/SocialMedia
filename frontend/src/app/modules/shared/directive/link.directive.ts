import {Directive, HostBinding, Input} from '@angular/core';
import {LinkColor} from '../types/link';

@Directive({
  selector: 'a [msLink]'
})
export class LinkDirective {

  @Input()
  public get color(): LinkColor {
    return this._color;
  }

  public set color(value: LinkColor) {
    this._color = value;
  }

  @HostBinding('class.btn')
  @HostBinding('class.btn-link')
  public readonly defaultClass = true;

  @HostBinding('class.text-default')
  public get isDefault(): boolean {
    return this._color === 'default';
  }

  @HostBinding('class.text-primary')
  public get isPrimary(): boolean {
    return this._color === 'primary';
  }

  @HostBinding('class.text-info')
  public get isInfo(): boolean {
    return this._color === 'info';
  }

  @HostBinding('class.success')
  public get isSuccess(): boolean {
    return this._color === 'success';
  }

  @HostBinding('class.warning')
  public get isWarning(): boolean {
    return this._color === 'warning';
  }

  @HostBinding('class.danger')
  public get isDanger(): boolean {
    return this._color === 'danger';
  }

  private _color: LinkColor = 'default';
}
