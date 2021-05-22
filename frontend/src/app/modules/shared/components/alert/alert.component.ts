import {Component, Input, Output, TemplateRef} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {AlertType} from "../../enums/alert-type.enum";
import {AlertCustomTemplateParams} from "../../models/alert-custom-template-params.model";

@Component({
  selector: 'ms-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() public header: string;
  @Input() public body: string;
  @Input() public type: AlertType;

  @Output() public readonly close = new EventEmitter<void>();
}
