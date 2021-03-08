import Vue from 'vue'
import Router from 'vue-router'
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import { configureVuexStore } from './stores'

export async function configureRouter () {
  Vue.use(Router)

  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        component: () => import('@/views/dashboard/Index'),
        children: [
          // Dashboard
          {
            name: 'Dashboard',
            path: '',
            component: () => import('@/views/dashboard/Dashboard'),
          },
          // Pages
          {
            name: 'User Profile',
            path: 'pages/user',
            component: () => import('@/views/dashboard/pages/UserProfile'),
          },
          {
            name: 'Notifications',
            path: 'components/notifications',
            component: () => import('@/views/dashboard/component/Notifications'),
          },
          {
            name: 'Icons',
            path: 'components/icons',
            component: () => import('@/views/dashboard/component/Icons'),
          },
          {
            name: 'Typography',
            path: 'components/typography',
            component: () => import('@/views/dashboard/component/Typography'),
          },
          // Tables
          {
            name: 'Regular Tables',
            path: 'tables/regular-tables',
            component: () => import('@/views/dashboard/tables/RegularTables'),
          },
          // Maps
          {
            name: 'Google Maps',
            path: 'maps/google-maps',
            component: () => import('@/views/dashboard/maps/GoogleMaps'),
          },
          // Upgrade
          {
            name: 'Upgrade',
            path: 'upgrade',
            component: () => import('@/views/dashboard/Upgrade'),
          },
          {
            path: 'oidc-callback',
            name: 'OidcCallback',
            component: () => import('@/views/OidcCallback.vue'),
          },
          // {
          //   path: 'oidc-popup-callback', // Needs to match popupRedirectUri in you oidcSettings
          //   name: 'oidcPopupCallback',
          //   component: OidcPopupCallback
          // },
          {
            path: 'oidc-callback-error', // Needs to match redirect_uri in you oidcSettings
            name: 'oidcCallbackError',
            component: () => import('@/views/OidcCallbackError.vue'),
            meta: {
              isPublic: true,
            },
          },
        ],
      },
    ],
  })

  router.beforeEach(vuexOidcCreateRouterMiddleware(await configureVuexStore(), 'oidcStore'))
  return router
}
