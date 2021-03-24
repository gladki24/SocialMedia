import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: 'input [msInput]'
})
export class InputDirective {

  @HostBinding('class.form-control')
  public readonly defaultClass = true;

  @HostBinding('class.form-control-alternative')
  @Input() public isAlternative: boolean = false;

  @HostBinding('class.is-valid')
  @Input() public isValid: boolean = null;

  @HostBinding('class.is-invalid')
  @Input() public isInvalid: boolean = null;
}
