module.exports = {
  devServer: {
    port: 5100,
    disableHostCheck: true,
  },
  pages: {
    app: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      excludeChunks: ['silent-renew-oidc'],
    },
    silentrenewoidc: {
      entry: 'src/silent-renew-oidc.js',
      template: 'public/silent-renew-oidc.html',
      filename: 'silent-renew-oidc.html',
      excludeChunks: ['app'],
    },
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
