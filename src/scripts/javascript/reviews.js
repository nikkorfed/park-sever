init("yandex");

async function init(from) {
  let target = $("." + from);
  let data = await request();
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
  target.find(".stars").html(data.stars);
  target.find(".rating").html(data.rating);

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

async function request() {
  let response = await fetch("/data/reviews.json");
  return await response.json();
}

function render({ url, image, user, date, text }) {
  let tag = url ? `a href=${url}` : "div";

  return `<${tag} class="review"><div class="head">${image}<div><div class="user">${user}</div><div class="date">${date}</div></div></div><div class="text"><div class="scrollable"><p>${text}</p></div></div></${
    url ? "a" : "div"
  }>`;
}
