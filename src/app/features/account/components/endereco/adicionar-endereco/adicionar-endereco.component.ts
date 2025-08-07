import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Endereco } from '../../../../../models/usuario/Endereco';

@Component({
  standalone: false,
  selector: 'app-adicionar-endereco',
  templateUrl: './adicionar-endereco.component.html',
  styleUrl: './adicionar-endereco.component.css'
})
export class AdicionarEnderecoComponent {

  endereco: Endereco = new Endereco();

  constructor(
    private usuarioService: UsuarioService
  ) { }

  salvarEndereco() {
    this.usuarioService
      .salvarEndereco(this.endereco)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
