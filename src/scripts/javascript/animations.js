check();
$(window).on("scroll", check);

function check() {
  let currentScroll = $(window).height() + $(window).scrollTop();

  $(".fadeIn").each(function () {
    if ($(this).hasClass("fading") || !$(this).hasClass("fadeIn")) return;

    if (currentScroll > $(this).offset().top + 100) {
      $(this).addClass("fading");
      setTimeout(() => $(this).removeClass("fadeIn fading"), 1000);
    }
  });

  // $(".slideIn").each(function () {
  //   function animate(element, delay = 0) {
  //     if ($(element).hasClass("sliding") || !$(element).hasClass("slideIn")) return;

  //     setTimeout(() => $(element).addClass("sliding"), delay);
  //     setTimeout(() => $(element).removeClass("slideIn sliding"), delay + 500);
  //   }

  //   let delay = 0;
  //   if (currentScroll > $(this).offset().top + 100) {
  //     if (!$(this).hasClass("each")) return animate(this);

  //     $(this).removeClass("slideIn each");

  //     const elements = $(this).children();
  //     elements.each(function () {
  //       $(this).addClass("slideIn");
  //       animate(this, (delay += 100));
  //     });
  //   }
  // });
}
