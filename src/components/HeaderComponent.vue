<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-info mb-2" >
        <div class="container">
            <router-link to="/" class="navbar-brand"> Home </router-link>
            <router-link to="/add" class="navbar-brand"> Add Restaurant </router-link>
            <router-link to="/update" class="navbar-brand"> Update Restaurant </router-link>
            <a v-on:click="logout" href="#" class="navbar-item logout"> Logout </a>
        </div>
    </nav>
    </div>
</template>

<script>

export default {

name: 'HeaderComponent',
methods:{
    logout(){
        localStorage.clear()
        this.$router.push({name : 'Login'})
    }
}

}
</script>

<style scoped>
    .logout {
        text-decoration: none;
        color: white;
    }
</style>
