import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'ms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class MsRegisterComponent implements OnInit {

  public readonly registerForm = new FormGroup({
    login: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    acceptedRules: new FormControl(false, Validators.required)
  });

  public constructor(
    private readonly service: RegisterService
  ) { }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.registerForm.value);
  }

}
