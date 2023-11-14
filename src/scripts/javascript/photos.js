const target = $(".photos-container");
const template = /Стоимость работ: ([\d\s]+) руб/;

$.instagramFeed({
  tag: target.data("username"),
  get_data: true,
  callback: renderPhotos,
});

function renderPhotos(data) {
  let posts = data["edge_hashtag_to_media"]["edges"];
  // let posts = data["edge_owner_to_timeline_media"]["edges"];
  posts.forEach(function (item, index) {
    let imageUrl = item["node"]["thumbnail_resources"][4]["src"];
    let url = "https://www.instagram.com/p/" + item["node"]["shortcode"];
    let text = item["node"]["edge_media_to_caption"]["edges"][0]["node"]["text"];
    let likes = item["node"]["edge_liked_by"]["count"];

    let match = text.match(template);
    let price = match && match[1].replace(/\s/g, "");
    price = price ? `<div class="text"><div class="label">Стоимость работы</div><div class="price">${price}₽</div></div>` : "";

    target.append(`<a class="photo fadeIn" href="${url}"><img src="${imageUrl}" loading="lazy">${price}</a>`);
  });
}
