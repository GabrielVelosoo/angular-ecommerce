import { Component } from '@angular/core';
import { LoginRequest } from '../../../../models/auth/LoginRequest';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../../../models/auth/RegisterRequest';
import { AuthService } from '../../services/auth.service';
import { Erro } from '../../../../models/Erro';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  loginData: LoginRequest = new LoginRequest();
  registerData: RegisterRequest = new RegisterRequest();
  showPassword: boolean = false;
  cadastrando: boolean = false;
  erros: Erro = new Erro();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.router.navigate(['/home']).then(r => {});
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  preparaCadastro(event: any) {
    event.preventDefault();
    this.registerData = new RegisterRequest();
    this.erros = new Erro();
    this.cadastrando = true;
  }

  alteraCadastroParaFalse(event: any) {
    event.preventDefault();
    this.loginData = new LoginRequest();
    this.erros = new Erro();
    this.cadastrando = false;
  }

  cadastrarCliente() {
    this.registerData.email = this.loginData.email;
    this.registerData.senha = this.loginData.senha;
    this.authService
      .salvarCliente(this.registerData)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.loginData = new LoginRequest();
          this.registerData = new RegisterRequest();
          this.erros = new Erro();
          this.cadastrando = false;
        },
        error: (errorResponse) => {
          this.erros = errorResponse.error;
          this.loginData.senha = '';
          console.log(this.erros);
        }
      });
  }
}
