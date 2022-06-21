<template>
  <!-- <sign-up /> -->
  <router-view />
</template>

<script>

// import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    // SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
    width: 100px;
    margin: 0 auto;
}

.register, .login {
    width: 300px;
    margin: 0 auto;
}

.register input, .login input {
    width: 100%;
    height: 40px;
    margin-bottom: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    border: 1px solid skyblue;
 }
</style>
