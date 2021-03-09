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
    notFound: {
      entry: 'src/main.js',
      template: 'public/404.html',
      filename: '404.html',
      excludeChunks: ['silent-renew-oidc'],
    },
    silentrenewoidc: {
      entry: 'src/silent-renew-oidc.js',
      template: 'public/silent-renew-oidc.html',
      filename: 'silent-renew-oidc.html',
      excludeChunks: ['app', 'notFound'],
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

  // publicPath: '/',
  publicPath: '/vuetify-material-dashboard',
}
