<template>
   <div class="wrapper">
    <div :style="{display: modal?'block':'none'}" class="loginMainBox">
        <div class="loginForm">
            <p class="closeIcon" @click="setModal"><i class="fa-solid fa-xmark"></i></p>
            <div class="col-md-12 col-lg-3 col-xl-3 col-12 p-0">
                <div class="loginBg">
                    <img src="assets/images/login.jpg" class="img-fluid" />
                </div>
            </div>
            <div class="col-md-12 col-lg-9 col-xl-9 col-12">
                <div class="loginBg">
                    <div class="user__Icons">
                        <i class="fa-solid fa-user"></i>
                        <span>Sign in</span>
                    </div>
                    
                    
                    <form>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                        </div>
                        <div class="form-group form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember"> Remember me
                            </label>
                        </div>
                        <a href="dashboard.php"  type="button"  class="btn allbtn">Check In</a>
                        <div class="forget__pass_btn d-flex flex-wrap">
                            <a href="#">Forget Password</a>
                            <span>You do not have an account?</span>
                            <router-link :to="{name:'SignUp'}" @click="setModal" class="signUp">Sign up</router-link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"LogIn",
    props:{
        modal:Boolean,
        setModal:Function
    }
    

}
</script>

<style>

</style>