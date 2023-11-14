$("#production-request").submit(async function (e) {
  e.preventDefault();

  $(".loading-area").addClass("active");

  let response = await fetch("/scripts/php/production-request.php", { method: "POST", body: new FormData(this) });
  let result = await response.json();

  if (result.message == "message-sent") $(".success-area").addClass("active");
  else $(".error-area").addClass("active");

  this.reset();
  setTimeout(() => $(".loading-area, .success-area, .error-area").removeClass("active"), 5000);
});
