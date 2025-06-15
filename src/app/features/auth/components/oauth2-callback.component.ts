import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  standalone: false,
  selector: 'app-oauth2-callback',
  templateUrl: 'oauth2-callback.component.html'
})
export class Oauth2CallbackComponent implements OnInit {

  constructor(
    private router: Router,
    private oauthService: OAuthService
  ) { }

  async ngOnInit() {
    await this.oauthService.loadDiscoveryDocument();
    await this.oauthService.tryLoginCodeFlow();

    console.log(this.oauthService.hasValidIdToken());

    if(this.oauthService.hasValidIdToken()) {
      this.router.navigate(['']).then();
    } else {
      console.log('Erro');
    }
  }
}
