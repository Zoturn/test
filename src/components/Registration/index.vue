<template>
  <div>
    <form v-if="!check" class="registration_container" @submit="onSignUp">
      <label>
        <span>Login</span>
        <input type="text" placeholder="login" v-model="login" required/>
      </label>
      <label>
        <span>Email</span>
        <input type="email" placeholder="email" v-model="email" required/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" placeholder="password" v-model="pass" required/>
      </label>
      <input type="submit" @submit.prevent="" value="Sign up">
    </form>
    <div v-if="check">
      <p>Link was sent to your email</p>
      <button @click="onCheck">Check email</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Registration',
        data() {
            return {
                check: false,
                login: '',
                pass: '',
                email: '',
                signUpData: {}
            }
        },
        methods: {
            onSignUp() {
                this.signUpData = {
                    login: this.login,
                    password: this.pass,
                    email: this.email
                }
                this.check = !this.check
            },
            onCheck() {
                this.$router.push('log')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
