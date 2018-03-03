jQuery(document).ready(function($) {

  $('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
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

$('.single-item').slick({
  arrows: true,
});

let top = $('.menu_sticky').offset().top;

$(document).on('scroll', function() {
  if ($(document).scrollTop() >= top) {
    if (!$('.menu_sticky').hasClass('fixed-top')) {
      $('.menu_sticky').addClass('fixed-top');
    }
  } else {
    $('.menu_sticky').removeClass('fixed-top');
  }
});

});
