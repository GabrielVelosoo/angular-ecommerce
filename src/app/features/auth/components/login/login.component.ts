import { Component } from '@angular/core';
import { LoginRequest } from '../../../../models/LoginRequest';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData: LoginRequest = {
    email: '',
    senha: ''
  }
  showPassword: boolean = false;
  loginError: boolean = false;

  constructor() { }

  onSubmit() {
    console.log(this.loginData.email + this.loginData.senha);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
