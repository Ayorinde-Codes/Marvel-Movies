<template>
    <div>
        <header-component />
        Home component
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
export default {

name: 'HomeComponent',
components:{
    HeaderComponent

},
mounted(){
            let user = localStorage.getItem('user-info');
            if(!user) {
                this.$router.push({name: 'SignUp'});
            }
        }
}
</script>

<style scoped>
</style>
