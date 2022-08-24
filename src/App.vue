<template>
 <HeaderVue/>
 <router-view/>
 <Footer/>
</template>

<script>

import HeaderVue from './components/Layout/Header.vue';
// import Home from "./view/Home/index.vue"
import Footer from './components/Layout/Footer.vue';

export default {
  
  name: 'App',
  components: {
    HeaderVue,
    // Home,
    Footer
  }
}

 
</script>

<style>

</style>
