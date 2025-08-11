import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Endereco } from '../../../../../models/usuario/Endereco';
import { Router } from '@angular/router';
import { Erro } from '../../../../../models/Erro';

@Component({
  standalone: false,
  selector: 'app-adicionar-endereco',
  templateUrl: './adicionar-endereco.component.html',
  styleUrl: './adicionar-endereco.component.css'
})
export class AdicionarEnderecoComponent {

  endereco: Endereco = new Endereco();
  erros: Erro = new Erro();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  salvarEndereco() {
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
}
