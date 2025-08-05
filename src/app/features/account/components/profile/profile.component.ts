import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../../models/Cliente';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  standalone: false,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  usuario: Cliente = new Cliente();
  atualizaDados: boolean = false;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService
      .obterUsuarioLogado()
      .subscribe({
        next: (response) => {
          this.usuario.id = response.id;
          this.usuario.email = response.email;

          this.usuarioService
            .obterUsuarioPorId(this.usuario.id)
            .subscribe({
              next: (response) => {
                this.usuario = response;
              },
              error: (error) => {
                console.log(error);
              }
            });
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  salvaDadosAtualizados() {
    this.usuario.cpf = this.limparCpfCnpj(this.usuario.cpf);
    this.usuarioService
      .atualizarDadosUsuario(this.usuario.id, this.usuario)
      .subscribe({
        next: () => {
          this.atualizaDados = false;
          this.ngOnInit();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  limparCpfCnpj(valor: string): string {
    return valor ? valor.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\D/g, '') : '';
  }

  atualizarDadosUsuario() {
    this.atualizaDados = true;
  }

  cancelaAtualizacao() {
    this.atualizaDados = false;
    this.ngOnInit();
  }
}
