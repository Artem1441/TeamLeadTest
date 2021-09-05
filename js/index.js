$(".scrollToOrder").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(".order").offset().top,
    },
    {
      duration: 0,
      easing: "linear",
    }
  );
  return false;
});

$(".slider_block").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 841,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 561,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".slick-prev").addClass("page-link").html("&laquo");
$(".slick-next").addClass("page-link").html("&raquo");

const inputPrompt = (el) => {
  let $el = $(el);
  $el.parent().toggleClass("active", $el.val().length > 0);
};

$(".inputer input")
  .each(function (idx, el) {
    let $el = $(el);
    $el.attr("placeholder", $el.siblings("label").text());

    inputPrompt(el);
  })
  .on("input", function () {
    inputPrompt(this);
  });

let timeMinut = 30 * 60;
timer = setInterval(function () {
  seconds = timeMinut % 60;
  minutes = (timeMinut / 60) % 60;
  if (timeMinut <= 0) {
    clearInterval(timer);
    $(".order_timer").html("");
  } else {
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let strTimer = `${Math.trunc(minutes)}:${seconds}`;
    $(".order_timer span").html(strTimer);
  }
  --timeMinut;
}, 1000);

window.screen.width <= 900 && $(".btn-lg").removeClass("btn-lg");
window.screen.width <= 600 && $(".btn").addClass("btn-sm");

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
