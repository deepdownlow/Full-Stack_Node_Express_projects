$(document).ready(() => {
  $("#form").hover(
    () => {
      $(".container").css("filter", "blur(10px)");
      $("body").css("background", "white");
    },
    () => {
      $(".container").css("filter", "");
      $("body").css("background", "");
    }
  );

  $("#search").on("click", () => {
    $(".container").addClass("animated bounceInUp");
  });
});
