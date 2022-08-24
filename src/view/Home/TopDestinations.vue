<template>
   <section id="discover-destinations" style="margin-top: 40px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="destnationTittle">Top destinations</h1>
                    </div>
                </div>
            <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="destinations_content_box img_animation">
                        <router-link :to="{name:'Details'}" >
                            <img src="assets/images/big-img.png" alt="img">
                            <div class="destinations_content_inner">
                                <h2>Up to</h2>
                                <div class="destinations_big_offer">
                                    <h1>50</h1>
                                    <h6><span>%</span> <span>Off</span></h6>
                                </div>
                                <h2>Holiday packages</h2>
                                <a href="details.php" class="btn btn_theme btn_md">Book now</a>
                            </div>
                        </router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="destinations_content_box img_animation">
                                    <a href="details.php">
                                        <img src="assets/images/destination1.png" alt="img">
                                    </a>
                                    <div class="destinations_content_inner">
                                        <h3><a href="details.php">China</a></h3>
                                    </div>
                                </div>
                                <div class="destinations_content_box img_animation">
                                    <a href="details.php">
                                        <img src="assets/images/destination2.png" alt="img">
                                    </a>
                                    <div class="destinations_content_inner">
                                        <h3><a href="details.php">Darjeeling</a></h3>
                                    </div>
                                </div>
                                <div class="destinations_content_box img_animation">
                                    <a href="details.php">
                                        <img src="assets/images/destination3.png" alt="img">
                                    </a>
                                    <div class="destinations_content_inner">
                                        <h3><a href="details.php">Malaysia</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="destinations_content_box img_animation">
                                    <a href="details.php">
                                        <img src="assets/images/destination4.png" alt="img">
                                    </a>
                                    <div class="destinations_content_inner">
                                        <h3><a href="details.php">Gangtok</a></h3>
                                    </div>
                                </div>
                                <div class="destinations_content_box img_animation">
                                    <a href="details.php">
                                        <img src="assets/images/destination5.png" alt="img">
                                    </a>
                                    <div class="destinations_content_inner">
                                        <h3><a href="details.php">Thailand</a></h3>
                                    </div>
                                </div>
                                <div class="destinations_content_box img_animation">
                                    <a href="details.php">
                                        <img src="assets/images/destination6.png" alt="img">
                                    </a>
                                    <div class="destinations_content_inner">
                                        <h3><a href="details.php">Australia</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="destinations_content_box img_animation">
                                    <a href="details.php">
                                        <img src="assets/images/destination7.png" alt="img">
                                    </a>
                                    <div class="destinations_content_inner">
                                        <h3><a href="details.php">London</a></h3>
                                    </div>
                                </div>
                                <div class="destinations_content_box img_animation">
                                    <a href="details.php">
                                        <img src="assets/images/destination8.png" alt="img">
                                    </a>
                                    <div class="destinations_content_inner">
                                        <h3><a href="details.php">USA</a></h3>
                                    </div>
                                </div>
                                <div class="destinations_content_box">
                                    <a href="details.php" class="btn btn_theme btn_md w-100">View all</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </section> 
</template>

<script>
export default {
    name:"TopDestination"

}
</script>

<style>

</style>