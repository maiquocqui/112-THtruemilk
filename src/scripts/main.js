$(document).ready(function() {
  $('.btn-showmenu').click(function() {
    $('.header-menu').toggleClass('open');
    $('.overlay').fadeToggle(500);
  });
  $('.overlay').click(function() {
    $('.header-menu').removeClass('open');
    $('.product-filter').removeClass('open');
    $(this).fadeOut(500);
  });
  $('.search-toggle').click(function() {
    $('.search').fadeToggle(300);
  });

  $('.btn-showfilter').click(function() {
    $('.product-filter').toggleClass('open');
    $('.overlay').fadeIn(500);
  });
  $('.filter-toggle').click(function() {
    $('.product-filter').removeClass('open');
    $('.overlay').fadeOut(500);
  });

  // banner
  $('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true
  });
  $('.product-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.product-nav'
  });
  $('.product-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slide',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.product-slick').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $('.product-slick2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});
if ($('#range-slider').length > 0) {
  var slider = document.getElementById('range-slider');
  noUiSlider.create(slider, {
    start: [0, 200000],
    connect: true,
    range: {
      min: 0,
      max: 300000
    }
  });
}
