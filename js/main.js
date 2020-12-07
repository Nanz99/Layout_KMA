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
});