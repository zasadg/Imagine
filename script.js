$(function () {
  $("#playlist li").on("click", function () {
    $("#videoarea").attr({
      "src": $(this).attr("movieurl"),
      "poster": "",
      "autoplay": "autoplay"
    })
  })

  $("#videoarea").attr({
    "src": $("#playlist li").eq(0).attr("movieurl"),
    "poster": $("#playlist li").eq(0).attr("moviesposter")
  })
})

let myIma = document.getElementById("img1");
myIma.addEventListener("click", () => myIma.classList.toggle("enlarge"));
let myImb = document.getElementById("img2");
myImb.addEventListener("click", () => myImb.classList.toggle("enlarge2"));
let myImc = document.getElementById("img3");
myImc.addEventListener("click", () => myImc.classList.toggle("enlarge3"));
let myImd = document.getElementById("img4");
myImd.addEventListener("click", () => myImd.classList.toggle("enlarge4"));
let myIme = document.getElementById("img5");
myIme.addEventListener("click", () => myIme.classList.toggle("enlarge5"));
let myImf = document.getElementById("img6");
myImf.addEventListener("click", () => myImf.classList.toggle("enlarge6"));
let $body = $('html, body'),
  actualSection = 0,
  totalSections = 5,
  speed = 500,
  isScrolling = false,
  scrollingTimer,
  clicking = false,
  friction = 100,
  startY;

$('body').swipe({
  swipe: function (event, direction) {
    if (direction == 'up') {
      moveScroll('down');
    } else if (direction == 'down') {
      moveScroll('up');
    }
  }
});

$('body, a, iframe').on('touchmove', function (e) {
  e.stopPropagation();
  e.preventDefault();
});
$('a, iframe').on('mouseenter', function (e) {
  e.stopPropagation();
  e.preventDefault();
});
$.browserSwipe({
  up: function () {
    moveScroll('up');
  },
  down: function () {
    moveScroll('down');
  }
});

// window resize
var resizeTimeout;
$(window).on('resize', function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    moveScroll();
  }, 600);
});

var moveScroll = function (dir) {

  if ($body.is(':animated') == false) {
    isScrolling = true;
    clearTimeout(scrollingTimer);

    if (dir == 'up') {
      actualSection = actualSection <= 0 ? 0 : actualSection - 1;
    } else if (dir == 'down') {
      actualSection = actualSection >= totalSections - 1 ? totalSections - 1 : actualSection + 1;
    }

    $('#scroll').css({ transform: 'translateY(-' + actualSection * $(window).height() + 'px)' }, speed);

    scrollingTimer = setTimeout(function () {
      isScrolling = false;
      clicking = false;
    }, speed + 10);
  }
}