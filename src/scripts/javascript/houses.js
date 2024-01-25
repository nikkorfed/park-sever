$(document).ready(function () {
  $("section.houses a.house").on("click", function (e) {
    e.preventDefault();

    $("section.houses a.house").removeClass("active");
    $(this).addClass("active");

    $("section.house").hide();
    const houseId = $(this).attr("href");
    $("section.house" + houseId).show();
  });
});
