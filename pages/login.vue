<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-6">
      <v-card>
        <v-card-title>
          <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="email"
              label="Email"
              outlined
              dense
              type="email"
              :rules="emailRules"
            />
            <v-text-field
              v-model="password"
              label="Password"
              outlined
              dense
              type="password"
              :rules="passwordRules"
            />
            <v-alert :value="errorMessage !== ''" type="error" transition="scale-transition">
              {{errorMessage}}
            </v-alert>
            <v-btn
              color="blue darken-4"
              min-width="100%"
              @click="login"
            >
              Login
            </v-btn>
            <p class="text-right mt-3">
              Don't have an account? <nuxt-link to="/signup">Sign Up</nuxt-link>
            </p>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Data {
  email: string
  password: string
  emailRules: Array<Function>
  passwordRules: Array<Function>
  errorMessage: string
}
export default defineComponent({
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v: string) => !!v || 'Password is required',
        (v: string) => v.length >= 6 || 'Password must be equal or greater than 6 characters',
      ],
      errorMessage: '',
    } as Data
  },
  methods: {
    login() : void {
      if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.errorMessage = error.message
          setTimeout(() => {
            this.errorMessage = ''
          }, 3000)
        })
      }
    },
  },
})

</script>
