import { Component } from '@angular/core';
import { LoginRequest } from '../../../../models/auth/LoginRequest';
import { RegisterRequest } from '../../../../models/auth/RegisterRequest';
import { AuthService } from '../../services/auth.service';
import { Erro } from '../../../../models/Erro';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  loginData: LoginRequest = new LoginRequest();
  registerData: RegisterRequest = new RegisterRequest();
  showPassword: boolean = false;
  cadastrando: boolean = false;
  erros: Erro = new Erro();
  mensagemSucesso: string = '';

  constructor(
    private authService: AuthService
  ) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async entrar(event: any) {
    await this.authService.login(event);
  }

  cadastrarCliente() {
    this.registerData.email = this.loginData.email;
    this.registerData.senha = this.loginData.senha;
    this.authService
      .salvarCliente(this.registerData)
      .subscribe({
        next: () => {
          this.loginData = new LoginRequest();
          this.registerData = new RegisterRequest();
          this.erros = new Erro();
          this.cadastrando = false;
          this.mensagemSucesso = 'Cadastro realizado com sucesso, faça o register para acessar sua conta';
        },
        error: (errorResponse) => {
          this.erros = errorResponse.error;
          this.loginData.senha = '';
        }
      });
  }
}
