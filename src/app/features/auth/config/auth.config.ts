import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const authConfig: AuthConfig = {
  requireHttps: false,
  issuer: environment.apiBaseUrl,
  redirectUri: environment.redirectUri,
  clientId: environment.clientId,
  scope: 'openid',
  responseType: 'code',
  showDebugInformation: true
}
