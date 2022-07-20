<template>
    <div>
        <header-component />
        Welcome {{ name }} to Restaurant Api
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
export default {

name: 'HomeComponent',
data(){
    return {
        name: '',
    }
},
components:{
    HeaderComponent
},
mounted(){
            let user = localStorage.getItem('user-info');

            this.name = JSON.parse(user).user.name;
            
            if(!user) {
                this.$router.push({name: 'SignUp'});
            }
        }
}
</script>

<style scoped>
</style>
