import { Component } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private oauthService: OAuthService,
  ) { }

  navegarUsuario() {
    if(this.oauthService.hasValidAccessToken()) {
      this.router.navigate(['my-account']).then();
    } else {
      this.authService.login().then();
    }
  }
}
