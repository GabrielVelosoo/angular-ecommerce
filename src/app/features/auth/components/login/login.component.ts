import { Component } from '@angular/core';
import { LoginRequest } from '../../../../models/auth/LoginRequest';
import { Router } from '@angular/router';

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
  cadastrando: boolean = false;

  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/home']).then(r => {});
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  preparaCadastro(event: any) {
    event.preventDefault();
    this.cadastrando = true;
  }

  alteraCadastroParaFalse(event: any) {
    event.preventDefault();
    this.cadastrando = false;
  }
}
