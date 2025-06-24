import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './features/auth/services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './features/home/home.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LayoutModule,
    HomeModule
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
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if(this.oauthService.hasValidAccessToken()) {
        console.log('Usuário autenticado')
      } else {
        console.log('Usuário não autenticado')
      }

      this.oauthService.setupAutomaticSilentRefresh();
    });
  }
}
