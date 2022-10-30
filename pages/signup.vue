<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-6">
      <v-card>
        <v-card-title>
          <h1 class="display-1 w-100 text-center">Create Account</h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="dni"
              label="DNI"
              outlined
              dense
              type="text"
              :rules="dniRules"
            />
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
            <v-btn
              color="blue darken-4"
              min-width="100%"
              @click="signUp"
            >
              Sign Up
            </v-btn>
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
  dni: string
  emailRules: Array<Function>
  passwordRules: Array<Function>
  dniRules: Array<Function>
}
export default defineComponent({
  name: 'SignUp',
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      dni: '',
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v: string) => !!v || 'Password is required',
        (v: string) => v.length >= 6 || 'Password must be equal or greater than 6 characters',
      ],
      dniRules: [
        (v: string) => !!v || 'DNI is required',
        (v: string) => v.length === 8 || 'DNI lenght must be equal than 8 characters',
      ],
    } as Data
  },
  methods: {
    signUp() : void {
      if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        // TODO: Sign Up use case
        this.$router.push('/login')
      }
    },
  },
})

</script>
