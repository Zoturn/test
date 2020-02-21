<template>
    <form class="registration_container" @submit="onLogIn">
      <label>
        <span>Login</span>
        <input type="text" placeholder="login" v-model="login" required/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" placeholder="password" v-model="pass" required/>
      </label>
      <input type="submit" value="Sign in">
    </form>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                login: '',
                pass: '',
                signInData: {}
            }
        },
        methods: {
            onLogIn() {
                this.signInData = {
                    login: this.login,
                    password: this.pass,
                    email: this.email
                }
                this.$router.push('viz')
            }
        }
    }
</script>

<style>

</style>
