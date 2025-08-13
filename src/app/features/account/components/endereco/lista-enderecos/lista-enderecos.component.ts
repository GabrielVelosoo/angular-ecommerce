import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Endereco } from '../../../../../models/usuario/Endereco';

@Component({
  standalone: false,
  selector: 'app-lista-enderecos',
  templateUrl: './lista-enderecos.component.html',
  styleUrl: './lista-enderecos.component.css'
})
export class ListaEnderecosComponent implements OnInit {

  enderecos: Endereco[] = [];
  mostrarModal: boolean = false;
  enderecoSelecionado?: Endereco;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService
      .obterEnderecosUsuarioLogado()
      .subscribe({
        next: (response) => {
          this.enderecos = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  abrirModal(endereco: Endereco) {
    this.enderecoSelecionado = endereco;
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
    this.enderecoSelecionado = undefined;
  }

  confirmaExclusao() {
    if(!this.enderecoSelecionado) return;
    this.usuarioService
      .deletarEndereco(this.enderecoSelecionado.id)
      .subscribe({
        next: () => {
          this.ngOnInit();
          this.fecharModal();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
