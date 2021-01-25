<template>
  <div />
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'OidcCallback',
    created () {
      this.oidcSignInCallback()
        .then((redirectPath) => {
          this.$router.push(redirectPath)
        })
        .catch((err) => {
          window.console.error(err)
          this.$router.push('/oidc-callback-error') // Handle errors any way you want
        })
    },
    methods: {
      ...mapActions('oidcStore', ['oidcSignInCallback']),
    },
  }
</script>
