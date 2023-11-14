init("drive2");
init("yandex");
init("google");

async function init(from) {
  let target = $("." + from);
  let data = await request(from);
  let options = {
    // autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    loop: true,
    nav: true,
    navElement: "div",
    navText: ["", ""],
    navContainer: `.${from} .arrows`,
    dots: false,
    margin: 2,
    responsive: {
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  target.find(".quantity").text(data.quantity);
  target.find(".view-all").attr("href", data.url);

  if (from == "yandex") target.find(".stars").html(data.stars);
  if (from == "google") target.find(".stars .filler").css("width", data.stars + "%");
  if (from == "yandex" || from == "google") target.find(".rating").html(data.rating);

  data.reviews.forEach((review) => target.find(".container").append(render(review, from)));
  target.find(".container").owlCarousel(options);

  $(window).on("scroll", function () {
    let currentScroll = $(window).height() + $(window).scrollTop();
    if (currentScroll > target.find(".container").offset().top + 150) {
      target.find(".container").trigger("play.owl.autoplay", [5000, false]);
      $(window).off("scroll");
    }
  });
}

async function request(from) {
  let response = await fetch("https://m72sever.ru/scripts/getReviews.php?from=" + from);
  return await response.json();
}

function render({ url, image, user, date, positive, text, carImage, title, car }, from) {
  image = from == "yandex" ? image : `<img class="image" src="${image}" loading="lazy">`;

  let icon = car
    ? positive
      ? '<img class="icon" src="/images/icons/positive.svg" loading="lazy">'
      : '<img class="icon" src="/images/icons/negative.svg" loading="lazy">'
    : "";

  let article = car
    ? `<div class="article"><img class="image" src="${carImage}" loading="lazy"><div><div class="title">${title}</div><div class="car">${car}</div></div></div>`
    : "";

  let tag = url ? `a href=${url}` : "div";

  return `<${tag} class="review"><div class="head">${image}<div><div class="user">${user}</div><div class="date">${date}</div></div>${icon}</div><div class="text"><div class="scrollable"><p>${text}</p></div></div>${article}</${
    url ? "a" : "div"
  }>`;
}
