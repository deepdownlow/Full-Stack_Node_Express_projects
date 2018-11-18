$(document).ready(function() {
  const pixelToMove = 5;
  $(".back-image").mousemove(function(e) {
    let width = $(this).innerWidth();
    let height = $(this).innerHeight();
    let newValueX = (e.pageX / width) * pixelToMove;
    let newValueY = (e.pageY / height) * pixelToMove;
    $(this).css("background-position", newValueX + "%" + " " + newValueY + "%");
  });
  $("#button").on("click", () => {
    $(".container").addClass("animated bounceOutLeft");
  });
  $("#button").hover(
    () => {
      $(".welcomeBox").css("filter", "blur(5px)");
      $(".back-image").css("background", "rgba(250,250,250,0.7)");
    },
    () => {
      $(".welcomeBox").css("filter", "");
      $(".back-image").css("background", "");
    }
  );
});
