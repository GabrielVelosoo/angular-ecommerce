import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../features/home/services/categoria.service';
import { Categoria } from '../../../models/Categoria';

@Component({
  standalone: false,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private oauthService: OAuthService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.categoriaService
      .obterCategorias()
      .subscribe({
        next: (response) => {
          this.categorias = response;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  navegarUsuario() {
    if(this.oauthService.hasValidAccessToken()) {
      this.router.navigate(['my-account']).then();
    } else {
      this.authService.login().then();
    }
  }
}
