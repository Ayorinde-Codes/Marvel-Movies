<template>
  <div>
    <header-component />
    Welcome {{ name }} to Restaurant Api
    <table border="1">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
      </tr>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
      </tr>
    </table>
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
    this.getRestaurants();
  },

  methods: {
    async getRestaurants() {
      let result = await axios.get("http://localhost:8000/api/restaurants");
      if (result.status == 200) {
        this.restaurants = result.data.data;
      } else {
        console.log("Error");
      }
    },
  },
};
</script>

<style scoped></style>
