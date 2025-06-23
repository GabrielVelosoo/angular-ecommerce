import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.apiBaseUrl,
  redirectUri: environment.auth.redirectUri,
  clientId: environment.auth.clientId,
  scope: 'openid USER',
  responseType: 'code',
  showDebugInformation: true,
  sessionChecksEnabled: true,
  useSilentRefresh: true,
  silentRefreshRedirectUri: environment.auth.silentRefreshRedirectUri
}
