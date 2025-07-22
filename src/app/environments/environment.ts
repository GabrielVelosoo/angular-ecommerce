export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080',
  auth: {
    clientId: 'meu-client',
    redirectUri: 'http://localhost:4200/auth/oauth2-callback',
    postLogoutRedirectUri: 'http://localhost:4200/home',
    logoutUrl: 'http://localhost:8080/logout',
    silentRefreshRedirectUri: 'http://localhost:4200/silent-refresh.html'
  }
}
