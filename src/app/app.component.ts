import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './features/auth/services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private authService: AuthService,
    private oauthService: OAuthService
  ) {
    this.authService.configureAuth();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then();
  }
}
