import {Component, Output, EventEmitter} from '@angular/core';
import { YoodleService } from './services/yoodle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertService } from '../../../shared/services/alert.service';
import { NavigatorService } from '../../../shared/services/navigator.service';

@Component({
  selector: 'ms-yoodle-input',
  templateUrl: './yoodle-input.component.html',
  styleUrls: ['./yoodle-input.component.scss']
})
export class YoodleInputComponent {

  @Output() public yoodleClicked = new EventEmitter<void>();

  public readonly yoodleForm = new FormGroup({
    text: new FormControl('')
  });

  public constructor(
    private readonly _service: YoodleService,
    private readonly _alertService: AlertService,
    private readonly _navigatorService: NavigatorService
  ) { }

  public yoodle(): void {
    const text = this.yoodleForm.value['text'];
    this._service.create(text).subscribe(result => {
      this._alertService.notifySuccess('Super!', 'Właśnie za yoodlowałeś. Teraz tylko trzeba zaczekać na reakcje :)');
      this._navigatorService.profile();
    });
    this.yoodleClicked.emit();
  }
}
