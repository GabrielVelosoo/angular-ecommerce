import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Endereco } from '../../../../../models/usuario/Endereco';
import { ActivatedRoute, Router } from '@angular/router';
import { Erro } from '../../../../../models/erro/Erro';
import { Cliente } from '../../../../../models/usuario/Cliente';
import { ESTADOS_BRASIL } from '../../../../../shared/constants/estados';

@Component({
  standalone: false,
  selector: 'app-adicionar-endereco',
  templateUrl: './adicionar-endereco.component.html',
  styleUrl: './adicionar-endereco.component.css'
})
export class AdicionarEnderecoComponent implements OnInit {

  endereco: Endereco = new Endereco();
  erros: Erro = new Erro();
  camposBloqueados: boolean = false;
  usuario: Cliente = new Cliente();
  atualizando: boolean = false;
  estados = ESTADOS_BRASIL;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.endereco.id = this.route.snapshot.params['id'];

    if(this.endereco.id) {
      this.atualizando = true;
      this.usuarioService
        .obterEnderecoPorId(this.endereco.id)
        .subscribe({
          next: (response) => {
            this.endereco = response;
          },
          error: (error) => {
            console.log(error);
          }
        });
    }

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
                this.endereco.nomeContato = response.nome;
                this.endereco.sobrenomeContato = response.sobrenome;
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

  obterDadosEnderecoPorCep() {
    const cepLimpo = this.limparCep();
    if(!cepLimpo || cepLimpo.length !== 8) {
      this.camposBloqueados = false;
      return;
    }
    this.usuarioService
      .obterDadosEnderecoPorCep(cepLimpo)
      .subscribe({
        next: (response) => {
          if(!response.erro) {
            this.endereco.endereco = response.logradouro;
            this.endereco.bairro = response.bairro;
            this.endereco.estado = response.uf;
            this.endereco.cidade = response.localidade;
            this.camposBloqueados = true;
          } else {
            this.camposBloqueados = false;
          }
        },
        error: (error) => {
          console.log(error);
          this.camposBloqueados = false;
        }
      });
  }

  salvarEndereco() {
    this.endereco.cep = this.limparCep();
    this.usuarioService
      .salvarEndereco(this.endereco)
      .subscribe({
        next: () => {
          this.router.navigate(['/my-account/address-book']).then();
        },
        error: (error) => {
          this.erros = error.error;
        }
      });
  }

  atualizarEndereco() {
    this.endereco.cep = this.limparCep();
    this.usuarioService
      .atualizarEndereco(this.endereco.id, this.endereco)
      .subscribe({
        next: () => {
          this.router.navigate(['/my-account/address-book']).then();
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  limparCep(): string {
    return this.endereco.cep.replace(/\D/g, '');
  }

  formatarCep() {
    const cepNumeros = this.limparCep();
    if(cepNumeros.length > 5) {
      this.endereco.cep = cepNumeros.substring(0, 5) + '-' + cepNumeros.substring(5, 8);
    } else {
      this.endereco.cep = cepNumeros;
    }
  }
}
