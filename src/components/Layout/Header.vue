<template>
    <nav class="navbar navbar-expand-lg navbar-light px-md-0" id="myNavbar">
        <div class="container-fluid">
            <router-link :to="{name:'Home'}" class="navbar-brand d-flex align-items-center">
                <img class="img-fluid me-3" src="assets/images/logo.png" alt="Logo" />
            </router-link>
            <button id="navbar__Toggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>



            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto pe-4  align-items-center">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button">
                            Helpline
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="javascript:void(0)"> <span class="dropdown__PhoneNo numberPhone"></span> +971 4 2087555</a>
                            <a class="dropdown-item" href="javascript:void(0)"> <span class="dropdown__PhoneNo numberPhone"></span> +971 4 2087555</a>
                            <a class="dropdown-item" href="javascript:void(0)"> <span class="dropdown__PhoneNo numberPhone"></span> +971 4 2087555</a>
                            <a class="dropdown-item" href="javascript:void(0)"> <span class="dropdown__PhoneNo numberPhone"></span> +971 4 2087555</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0)" class="language__Section"><span></span> ENG</a>
                    </li>
                </ul>
                <div class="navbar-nav icons__rightside align-items-center">
                    <span>Sign In with</span>
                    <a href="#" class="btn allbtn btn__Orange userLogn px-3 py-2" @click="loginShow">
                        Sign In
                    </a>
    
                    <!--<a href="dashboard.php" class="btn allbtn btn__Orange px-3 py-2">-->
                    <!--     Agent-->
                    <!--</a>-->
                </div>
            </div>


           


        </div>
    </nav>
    <Login :modal="modal" :setModal="loginShow" />
</template>

<script>
import Login from "../../view/Authentication/Login.vue"
export default {
name:"HeaderVue",
components:{
    Login
},
data(){
    return{
        modal:false
    }
},
methods:{
   loginShow(){
       this.modal = !this.modal
   }
}

}
</script>

<style>

</style>