import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../../../models/auth/RegisterRequest';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/usuario/Cliente';
import { environment } from '../../../environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../config/auth.config';
import { jwtDecode } from 'jwt-decode';
import { Token } from '../../../models/auth/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiBaseUrl + '/api/clientes';

  constructor(
    private http: HttpClient,
    private oauthService: OAuthService,
  ) { }

  configureAuth() {
    this.oauthService.configure(authConfig);
  }

  async login() {
    this.oauthService.initCodeFlow();
  }

  private get decodedAccessToken(): Token | null {
    const token: string = this.oauthService.getAccessToken();
    if(!token) {
      return null;
    }
    return jwtDecode<Token>(token);
  }

  get roles(): string[] {
    return this.decodedAccessToken?.authorities || [];
  }

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }

  logout() {
    this.oauthService.logoutUrl = environment.auth.logoutUrl;
    this.oauthService.postLogoutRedirectUri = environment.auth.postLogoutRedirectUri;
    this.oauthService.logOut();
  }

  salvarCliente(cliente: RegisterRequest): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }
}
