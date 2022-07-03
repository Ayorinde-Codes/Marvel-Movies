<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-info mb-2" >
        <div class="container">
            <a href="#" class="navbar-brand"> Home </a>
            <a href="#" class="navbar-brand"> Add Restaurant </a>
            <a href="#" class="navbar-brand"> Update Restaurant </a>
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
