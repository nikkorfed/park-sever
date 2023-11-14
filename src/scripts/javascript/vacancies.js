import data from "./data.js";
render(data);

async function render(data) {
  data = await data;
  data = data["Вакансии"];
  data.splice(0, 1);

  data = data.length
    ? '<div class="columns">' +
      data
        .map((row) => `<h3>${row[0]}</h3><div class="subtitle">${row[1]}</div><p>${row[2]}</p>`)
        .map((row) => `<div class="col-md-6"><div class="block">${row}</div></div>`)
        .join("") +
      "</div>"
    : "<p>В данный момент свободных вакансий нет.</p>";

  $(".vacancies .wrapper").append(data);
  $(".vacancies .loading-icon").hide();
  $(".vacancies .block").fadeIn();
}
