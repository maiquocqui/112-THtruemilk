'use strict';

$(document).ready(function () {
    // header scroll event
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    // header menu script
    if ($(window).width() < 1200) {
        $('.top-menu ul').insertAfter('ul.menu-link');
    }

    $('.btn-showmenu').on("click", function () {
        $('.menu').slideToggle(500);
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
});