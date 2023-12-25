$(document).ready(function () {
  $("#slider .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });
  $("#advantages-2 .owl-carousel, #main-menu .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
  });
});
