import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {LoginService} from "./services/login.service";
import {AlertService} from "../../../shared/services/alert.service";
import {NavigatorService} from "../../../shared/services/navigator.service";

// todo add form validation
@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class MsLoginComponent {

  public readonly loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  public constructor(
      private readonly service: LoginService,
      private readonly alertService: AlertService,
      private readonly navigator: NavigatorService
  ) { }

  public onSubmit(): void {
    this.service.login(this.loginForm.value['login'], this.loginForm.value['password']).subscribe(() => {
      this.alertService.notifySuccess('Sukces', 'Udało się zalogować');
      this.navigator.main();
    }, error => {
      this.alertService.notifyDanger('Błąd', 'Konto nie istnieje albo błędne dane')
    });
  }
}
