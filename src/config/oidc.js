export const oidcSettings = {
    authority: 'https://demo.identityserver.io',
    clientId: 'interactive.public.short',
    responseType: 'code',
    scope: 'openid profile email api offline_access',
    redirectUri: 'http://localhost:5100/oidc-callback',
    popupRedirectUri: 'http://localhost:5100/oidc-popup-callback',
    automaticSilentRenew: true,
    automaticSilentSignin: false,
    silentRedirectUri: 'http://localhost:5100/silent-renew-oidc.html',
    postLogoutRedirectUri: 'http://localhost:5100',
}
