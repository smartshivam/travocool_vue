<template>
    <section id="our-offers" class="mb-3" style="margin-top: -60px;">
            <div class="container">
            <h2 class="offerTitle">Our offers</h2>
            <p class="offersubtitle">Choose the best offer for you</p>
                <div class="our__OffersSlider" id="our__offers">
                    <div class="our__offersliderimage">
                        <img src="assets/images/slider/image1.jpg" alt="Offer Slider Image" class="img-fluid">
                        <div class="container">
                            <div class="caption__Slider">
                                <h2>7% Discount for all Airlines</h2>
                                <div class="destinations_content_box">
                                    <a href="" class="btn btn_theme btn_md w-100">See All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="our__offersliderimage">
                        <img src="assets/images/slider/image3.jpg" alt="Offer Slider Image" class="img-fluid">
                        <div class="container">
                            <div class="caption__Slider">
                                <h2>Luxury resorts top deals</h2>
                                <span class="every__Summer">Just have fun</span>
                                <div class="destinations_content_box">
                                    <a href="" class="btn btn_theme btn_md w-100">See All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="our__offersliderimage">
                        <img src="assets/images/slider/image3.jpg" alt="Offer Slider Image" class="img-fluid">
                        <div class="container">
                            <div class="caption__Slider">
                                <h2>Special Offers</h2>
                                <span class="every__Summer">Every winter has its summer</span>
                                <div class="destinations_content_box">
                                    <a href="" class="btn btn_theme btn_md w-100">See All</a>
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

    name:"OurOffers",
    methods:{
    slider(){
        window.$(function(){
window.$('#our__offers').not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:true,
            //autoplay: true,
            autoplaySpeed: 6000,
            prevArrow:"<button type='button' class='slick-prev pull-left'><svg class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root' focusable='false' viewBox='0 0 24 24' aria-hidden='true' data-testid='ArrowBackIcon'><path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'></path></svg></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><svg class='MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root' focusable='false' viewBox='0 0 24 24' aria-hidden='true' data-testid='ArrowForwardIcon'><path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'></path></svg></button",
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
                    slidesToScroll: 1
                }
            }
        ]
    });
        })
         
    }
    },
    mounted (){
    this.slider()
}
}


</script>

<style>

</style>