import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  standalone: false,
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrl: './lista-endereco.component.css'
})
export class ListaEnderecoComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService
      .obterEnderecosUsuarioLogado()
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
