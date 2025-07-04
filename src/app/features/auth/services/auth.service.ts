import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../../../models/auth/RegisterRequest';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/Cliente';
import { environment } from '../../../environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../config/auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiBaseUrl + '/api/clientes';

  constructor(
    private http: HttpClient,
    private oauthService: OAuthService
  ) { }

  configureAuth() {
    this.oauthService.configure(authConfig);
  }

  async login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  salvarCliente(cliente: RegisterRequest): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }
}
