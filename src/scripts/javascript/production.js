import data from "./data.js";
render(data);

async function render(data) {
  data = await data;
  data = data["Продукция"];

  data = data.map((row) => "<tr>" + row.map((item) => `<td>${item}</td>`) + "</tr>").join();

  $(".production table").append(data);
  $(".production .loading-icon").hide();
  $(".production .table").fadeIn();
}
