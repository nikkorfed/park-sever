$(document).ready(function () {
  $("#slider .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });
  $("#main-menu .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
  });
  $("#advantages .owl-carousel").owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    startPosition: "URLHash",
  });
});
