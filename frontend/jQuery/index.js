$(document).keydown(function(event) {
  $("h1").text(event.key);
});

$("a").attr("href", "https://yahoo.com");

$("h1").on("click", function() {
  $(this).css("color", "red");
})