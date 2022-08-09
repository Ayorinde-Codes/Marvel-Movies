<template>
  <div>
    <header-component />
    Welcome {{ name }} to Restaurant Api
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import axios from "axios";
export default {
  name: "HomeComponent",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    HeaderComponent,
  },
  mounted() {
    let user = localStorage.getItem("user-info");

    this.name = JSON.parse(user).user.name;

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    getRestaurants();
  },

  methods: {
    async getRestaurants() {
      let result = await axios.get("http://localhost:8000/api/restaurants");
      if (result.status == 200) {
        this.restaurants = result.data.data;
      } else {
        alert("Error");
      }
    },
  },
};
</script>

<style scoped></style>
