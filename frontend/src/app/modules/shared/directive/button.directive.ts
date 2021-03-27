import {Directive, HostBinding, Input} from '@angular/core';
import {ButtonColor, ButtonSize} from '../types/button';

@Directive({
  selector: 'button, a [msButton]'
})
export class ButtonDirective {

  @Input()
  public get size(): ButtonSize {
    return this._size;
  }

  public set size(value: ButtonSize) {
    this._size = value;
  }

  @Input()
  public get color(): ButtonColor {
    return this._color;
  }

  public set color(value: ButtonColor) {
    this._color = value;
  }

  @Input()
  public get isOutline(): boolean {
    return this._isOutline;
  }

  public set isOutline(value: boolean) {
    this._isOutline = value;
  }

  @HostBinding('class.btn')
  public readonly defaultClass: boolean = true;

  @HostBinding('class.btn-primary')
  public get isPrimary(): boolean {
    console.log('hi');
    return this.color === 'primary' && !this.isOutline;
  }

  @HostBinding('class.btn-info')
  public get isInfo(): boolean {
    return this.color === 'info' && !this.isOutline;
  }

  @HostBinding('class.btn-success')
  public get isSuccess(): boolean {
    return this.color === 'success' && !this.isOutline;
  }

  @HostBinding('class.btn-warning')
  public get isWarning(): boolean {
    return this.color === 'warning' && !this.isOutline;
  }

  @HostBinding('class.btn-danger')
  public get isDanger(): boolean {
    return this.color === 'danger' && !this.isOutline;
  }

  @HostBinding('class.btn-neutral')
  public get isNeutral(): boolean {
    return this.color === 'neutral' && !this.isOutline;
  }

  @HostBinding('class.btn-outline-primary')
  public get isOutlinedPrimary(): boolean {
    return this.color === 'primary' && this.isOutline;
  }

  @HostBinding('class.btn-outline-info')
  public get isOutlinedInfo(): boolean {
    return this.color === 'info' && this.isOutline;
  }

  @HostBinding('class.btn-outline-success')
  public get isOutlinedSuccess(): boolean {
    return this.color === 'success' && this.isOutline;
  }

  @HostBinding('class.btn-outline-warning')
  public get isOutlinedWarning(): boolean {
    return this.color === 'warning' && this.isOutline;
  }

  @HostBinding('class.btn-outline-danger')
  public get isOutlinedDanger(): boolean {
    return this.color === 'danger' && this.isOutline;
  }

  @HostBinding('class.btn-outline-neutral')
  public get isOutlinedNeutral(): boolean {
    return this.color === 'neutral' && this.isOutline;
  }

  @HostBinding('class.btn-sm')
  public get isSmall(): boolean {
    return this.size === 'small';
  }

  @HostBinding('class.btn-md')
  public get isMedium(): boolean {
    return this.size === 'medium';
  }

  @HostBinding('class.btn-lg')
  public get isLarge(): boolean {
    return this.size === 'large';
  }

  private _size: ButtonSize = 'medium';
  private _color: ButtonColor = 'primary';
  private _isOutline: boolean = false;
}
