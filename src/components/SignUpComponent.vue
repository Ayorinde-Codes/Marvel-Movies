<template>
    <div>
        <img class="logo" src="../assets/restaurant-logo.png" />
        <h1>Sign Up</h1>

        <div class="register">
            <!-- <label for="name">Name</label> -->
            <input type="text" id="name" v-model="name" placeholder="Enter your name"/>

            <!-- <label for="email">Email</label> -->
            <input type="text" id="email" v-model="email" placeholder="Enter your email" />

            <!-- <label for="password">Password</label> -->
            <input type="password" id="password" v-model="password"  placeholder="password"/>

            <!-- <label for="passwordConfirmation">Password Confirmation</label>
            <input type="password" id="passwordConfirmation" v-model="passwordConfirmation" /> -->

            <button class="btn btn-block btn-success" v-on:click="signUp">Sign Up</button>
            <p> already have an account? <router-link to="/login"> Login </router-link> </p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "SignUp",
        
        data() {
            return {
                name: "",
                email: "",
                password: ""
            }
        },

        methods: {
            async signUp() {
                
                let result = await axios.post('http://localhost:8001/api/register', { 
                        name : this.name,
                        email : this.email,
                        password : this.password 
                });
                
                if(result.status == 201) {

                    localStorage.setItem('user-info', JSON.stringify(result.data.data));

                    this.$router.push({name: 'Home'});
                }
                else {
                    alert("Error");
                }
            }
        },

        mounted(){
            let user = localStorage.getItem('user-info');
            if(user) {
                this.$router.push({name: 'Home'});
            }
        }
    }

</script>


<style scoped>

</style>