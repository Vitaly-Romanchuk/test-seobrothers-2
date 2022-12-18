(function ($) {
  'use strict';


  // $.exists = function (selector) {
  //   return $(selector).length > 0;
  // };

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(function () {   

    slickInit();
    AOS.init();

  });

    // ------------------------ Slick Slider

  function slickInit() {
    if ($.exists('.bk-slider')) {
      $('.bk-slider').each(function () {
        // Slick Variable
        var $ts = $(this).find('.bk-slider_container');
        var $slickActive = $(this).find('.bk-slider_wrapper');
        

        // Auto Play
        var autoPlayVar = parseInt($ts.attr('data-autoplay'), 10);
        // Auto Play Time Out
        var autoplaySpdVar = 3000;
        if (autoPlayVar > 1) {
          autoplaySpdVar = autoPlayVar;
          autoPlayVar = 1;
        }
        // Slide Change Speed
        var speedVar = parseInt($ts.attr('data-speed'), 10);
        // Slider Loop
        var loopVar = Boolean(parseInt($ts.attr('data-loop'), 10));
        // Slider Center
        var centerVar = Boolean(parseInt($ts.attr('data-center'), 10));
        // Slider Center
        var variableWidthVar = Boolean(
          parseInt($ts.attr('data-variable-width'), 10)
        );
        // Pagination
        var paginaiton = $(this).children().hasClass('cs-pagination');
        // Slide Per View
        var slidesPerView = $ts.attr('data-slides-per-view');
        if (slidesPerView == 1) {
          slidesPerView = 1;
        }
        if (slidesPerView == 'responsive') {
          var slidesPerView = parseInt($ts.attr('data-add-slides'), 10);
          var lgPoint = parseInt($ts.attr('data-lg-slides'), 10);
          var mdPoint = parseInt($ts.attr('data-md-slides'), 10);
          var smPoint = parseInt($ts.attr('data-sm-slides'), 10);
          var xsPoing = parseInt($ts.attr('data-xs-slides'), 10);
        }
        // Fade Slider
        var fadeVar = parseInt($($ts).attr('data-fade-slide'));
        fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

        // Slick Active Code
        $slickActive.slick({
          autoplay: autoPlayVar,
          // dots: paginaiton,
          // centerPadding: '0',
          // speed: speedVar,
          // infinite: loopVar,
          // autoplaySpeed: autoplaySpdVar,
          centerMode: centerVar,
          fade: fadeVar,
          prevArrow: $(this).find('.bk-left_arrow'),
          nextArrow: $(this).find('.bk-right_arrow'),
          appendDots: $(this).find('.bk-pagination'),
          slidesToShow: slidesPerView,
          variableWidth: variableWidthVar,
          // slidesToScroll: slidesPerView,

        });
      });
    }





  }

  // ------------------------ Навигация скролл: Navigation Scroll
  $(window).on("scroll", function () {
    var sticky = $(".sticky-menu"),
      scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });

  if ($('#newsLetterPopup').length) {
    setTimeout(function() {
        $('#newsLetterPopup').fadeIn();
        $('#newsLetterPopup').addClass('showpopup');
    }, 6000);

    $('.close-news-letter').click( function(e) {
        e.preventDefault();
        $('#newsLetterPopup').removeClass('showpopup');
    });
}   

  //---------------------- Click event to scroll to top
  $(".scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 });
    return false;
  });

  // -------------------- Remove Placeholder When Focus Or Click
  $("input,textarea").each(function () {
    $(this).data("holder", $(this).attr("placeholder"));
    $(this).on("focusin", function () {
      $(this).attr("placeholder", "");
    });
    $(this).on("focusout", function () {
      $(this).attr("placeholder", $(this).data("holder"));
    });
  });

  // -------------------- Preloader
  $(window).on("load", function () {
    // makes sure the whole site is loaded

    function handlePreloader() {
      if ($(".preloader").length) {
        $(".preloader").delay(200).fadeOut(500);
      }
    }
    handlePreloader();


// ------------ develop sliders -----------
let SwiperBottom = new Swiper('.develop-slider .swiper-container', {
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: 6,
  speed: 3000,
  autoplay: {
      delay: 1,
  },
  loop: true,
  allowTouchMove: false,
  disableOnInteraction: true,
  breakpoints: {
      0: {
          slidesPerView: 2,
      },
      480: {
          slidesPerView: 2,
      },
      787: {
          slidesPerView: 3,
      },
      991: {
          slidesPerView: 4,
      },
      1200: {
          slidesPerView: 6,
      }
  }
  });

    // ------------------------------- AOS Animation
    if ($("[data-aos]").length) {
      AOS.init({
        duration: 800,
        mirror: true,
        once: true,
        offset: 50,
      });
    }
  }); //End On Load Function
})(jQuery);