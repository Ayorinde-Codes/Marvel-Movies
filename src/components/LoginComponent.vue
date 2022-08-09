<template>
  <div>
    <img class="logo" src="../assets/restaurant-logo.png" />
    <h1>Login Up</h1>

    <div class="login">
      <input
        type="text"
        id="email"
        v-model="email"
        placeholder="Enter your email"
      />
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="password"
      />
      <button class="btn btn-block btn-success" v-on:click="login">
        Login
      </button>
      <p>
        Don't have an account? <router-link to="/signup"> SignUp </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.post("http://localhost:8000/api/login", {
        email: this.email,
        password: this.password,
      });
      if (result.status == 200) {
        console.warn(result.data);
        localStorage.setItem("user-info", JSON.stringify(result.data.data));
        this.$router.push({ name: "Home" });
      } else {
        alert("Error");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
