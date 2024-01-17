$(document).ready(function () {
  // Определяем показать ли кнопки при загрузке страницы
  if ($(window).scrollTop() > 200) {
    $(".fixed-buttons").fadeIn();
  }

  // Определяем то же самое при прокрутке
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".fixed-buttons").fadeIn();
    } else {
      $(".fixed-buttons").fadeOut();
    }
  });
});
