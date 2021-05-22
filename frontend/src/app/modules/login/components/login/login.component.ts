import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class MsLoginComponent implements OnInit {

  public readonly loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log('submit')
  }
}
