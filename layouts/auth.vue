<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title>E-Library</v-toolbar-title>
      <v-spacer />
      <v-btn text to="/login" exact-active-class="no-active-class">Sign In</v-btn>
      <v-btn color="blue darken-4" to="signup">Sign Up</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLayout',
  mounted() {
    this.checkToken()
  },
  methods: {
    checkToken(){
      if(localStorage.getItem('token')) {
        this.$store.commit('auth/setToken', localStorage.getItem('token'))
        this.$router.push('/')
      }
    }
  },
})
</script>
<style scoped>
.no-active-class::before {
  opacity: 0 !important;
}
</style>
