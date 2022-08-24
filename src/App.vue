<template>
<Preloader/>
 <HeaderVue/>
 <router-view/>
 <Footer/>
</template>

<script>

import HeaderVue from './components/Layout/Header.vue';
// import Home from "./view/Home/index.vue"
import Footer from './components/Layout/Footer.vue';
import Preloader from './components/Preloader/Preloader.vue';

export default {
  
  name: 'App',
  components: {
    HeaderVue,
    // Home,
    Footer,
    Preloader
}
}

 
</script>

<style>

</style>
