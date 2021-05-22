import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import {AlertService} from "../../../shared/services/alert.service";
import {NavigatorService} from "../../../shared/services/navigator.service";

// TODO add validation for inputs
@Component({
  selector: 'ms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class MsRegisterComponent {

  public readonly registerForm = new FormGroup({
    login: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    acceptedRules: new FormControl(false, Validators.required)
  });

  public constructor(
    private readonly service: RegisterService,
    private readonly alertService: AlertService,
    private readonly navigatorService: NavigatorService
  ) { }

  public onSubmit(): void {
    this.service.register(
        this.registerForm.value['login'],
        this.registerForm.value['name'],
        this.registerForm.value['password']
    ).subscribe(() => {
      this.alertService.notifySuccess('Rejestracja', 'Utworzono konto')
      this.navigatorService.login();
    }, error => {
      this.alertService.notifyDanger('Błąd', error)
    });
  }

}
