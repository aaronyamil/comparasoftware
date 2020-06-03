import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public loginService: LoginServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }

  login() {
    // login the credentials
    this.loginService.login(this.userForm.value).subscribe(
      (data: any) => {
        localStorage.setItem('key', data.token); // Here we need to apply guards
        this.router.navigateByUrl('/soft');
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
