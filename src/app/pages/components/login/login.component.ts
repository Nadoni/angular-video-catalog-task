import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {IUserModel} from '../../interface/user.model';
import {ErrorStateMatcher} from '@angular/material';
import {accountValidationMessages} from '../../validation/validation-constants';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // public passwordFormControl: FormControl;

  public loginFrom: FormGroup;
  public user: IUserModel;
  public accountValidationMessages = accountValidationMessages;
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  errorMatcher = new MyErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    // public errorMatcher: MyErrorStateMatcher
  ) {
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.buildLoginForm();
  }


  private buildLoginForm() {
    this.loginFrom = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          // Validators.email,
          Validators.pattern('(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)')
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9]{1,14}')
        ]
      ]
    });
  }


  logIn(user) {
    console.log('Form value', user);
    const isExist = this.authService.login(user);
    if (isExist) {
      this.router.navigate(['/courses']);
      console.log('You are logged in!');
    } else {
      console.log('Wrong password or email');
    }
  }
}
