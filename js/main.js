$(document).ready(function () {
   $('.carousel').slick({
      dots:true,
      infinite: true,
      speed: 1000,
      fade: true,
      prevArrow: '<i class="material-icons left">keyboard_arrow_left</i>',
      nextArrow: '<i class="material-icons right">keyboard_arrow_right</i>',
      cssEase: 'linear'
   });
   $('.feedback__content').slick({
      dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
   });
});