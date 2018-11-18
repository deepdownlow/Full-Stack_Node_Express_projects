
const responsive = (...args) => {
  if (iPhoneX.matches) {
    $("#a, #b").css("font-size", "5vw");
    $("#search").addClass("btn-block");
    $(".welcomeBox h1").css("font-size", "19vw");
    $(".welcomeBox p").css("font-size", "5vw");
    $("#header").css("font-size", "6vw");
    $("#headerDown").css("font-size", "5vw");
    $('.plot, .overview').css("font-size", "18vw");
  } else if (iPad.matches) {
    $("#a, #b").css("font-size", "3.2vw");
    $(".welcomeBox h1").css("font-size", "19vw");
    $(".welcomeBox p").css("font-size", "5vw");
    $("#header").css("font-size", "6vw");
    $("#headerDown").css("font-size", "5vw");
  } else if (iPadPro.matches) {
    $("#a, #b, #search, #text").css("font-size", "3.2vw");
    $(".welcomeBox h1").css("font-size", "19vw");
    $(".welcomeBox p").css("font-size", "5vw");
    $("#header").css("font-size", "6vw");
    $("#headerDown").css("font-size", "5vw");
  }
};

const iPhoneX = window.matchMedia("(max-width: 375px)");
const iPad = window.matchMedia("(max-width: 768px)");
const iPadPro = window.matchMedia("(max-width: 1024px)");

responsive();
