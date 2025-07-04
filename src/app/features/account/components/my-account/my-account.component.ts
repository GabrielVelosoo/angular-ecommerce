import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Cliente } from '../../../../models/Cliente';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent implements OnInit {

  usuario: Cliente = new Cliente();

  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router
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

  logout() {
    this.authService.logout();
    this.router.navigate(['home']).then();
  }
}
