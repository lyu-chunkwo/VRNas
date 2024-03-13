$(function () {
  Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


$(".accordion__content").css("display", "none");

$(".accordion__title").click(function () {
  $(".accordion__item--faq").removeClass("open");
  $(".accordion__title").not(this).removeClass("open");
  $(".accordion__title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
  $(this).parent(".accordion__item--faq").toggleClass("open");
});

$('.articles__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: true,

    prevArrow: '<button class="slick-btn slick-prev"><svg class="slick-svg" width="16" height="17"><use xlink: href="images/result/sprite/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slick-svg" width="19" height="19"><use xlink: href="images/result/sprite/sprite.svg#arrow"></use></svg></button>'
  });


  var mixer = mixitup('.accordion');

});