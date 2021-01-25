export const oidcSettings = {
    authority: 'https://demo.identityserver.io',
    clientId: 'interactive.public',
    responseType: 'code',
    scope: 'openid profile email api offline_access',
    redirectUri: 'https://martinussuherman.github.io/vuetify-material-dashboard/oidc-callback',
    popupRedirectUri: 'https://martinussuherman.github.io/vuetify-material-dashboard/oidc-popup-callback',
    automaticSilentRenew: true,
    automaticSilentSignin: false,
    silentRedirectUri: 'https://martinussuherman.github.io/vuetify-material-dashboard/silent-renew-oidc.html',
    postLogoutRedirectUri: 'https://martinussuherman.github.io/vuetify-material-dashboard/',
}
