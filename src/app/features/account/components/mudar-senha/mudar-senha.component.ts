import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Erro } from '../../../../models/erro/Erro';

@Component({
  standalone: false,
  selector: 'app-mudar-senha',
  templateUrl: './mudar-senha.component.html',
  styleUrl: './mudar-senha.component.css'
})
export class MudarSenhaComponent {

  senhaAtual: string = '';
  novaSenha: string = '';
  confirmarSenha: string = '';
  erros: Erro = new Erro();
  mensagemSucesso: boolean = false;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  alterarSenha() {
    this.usuarioService
      .alterarSenha(this.senhaAtual, this.novaSenha)
      .subscribe({
        next: () => {
          this.mensagemSucesso = true;
          this.erros = new Erro();
          this.senhaAtual = '';
          this.novaSenha = '';
          this.confirmarSenha = '';
        },
        error: (error) => {
          this.erros = error.error;
        }
      });
  }

  verificarSenhasCoincidem(): boolean {
    return this.novaSenha === this.confirmarSenha;
  }
}
