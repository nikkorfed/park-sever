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
  $("#advantages .mobile .owl-carousel").owlCarousel({
    items: 1.4,
    loop: true,
    center: true,
  });
  $("#advantages .desktop .owl-carousel").owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    startPosition: "URLHash",
  });
  $("#houses .owl-carousel").owlCarousel({
    responsive: {
      0: {
        items: 1,
        margin: 10,
        loop: true,
      },
      768: {
        items: 3,
        margin: 30,
        loop: false,
      },
    },
  });
  $("#retriver-club .owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    // center: true,
  });
  $("#animals .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
        margin: 20,
      },
      768: {
        items: 3,
        margin: 30,
      },
      992: {
        items: 4,
        margin: 30,
      },
    },
  });
});
