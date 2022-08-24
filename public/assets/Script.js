$(document).ready(function(){
    $('#package__WrapperID').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
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
                  centerMode: false, 
                  slidesToScroll: 1
              }
          }
      ]
  });
  $('#our__offers').slick({
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
  });