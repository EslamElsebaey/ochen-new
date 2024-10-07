// On window load
$(window).on("load", function () {
  $(".preloader").fadeOut();
});

//********************************************************************************************

$(document).ready(function () {
  // Advantages

  $(".main-question").on("click", function () {
    $(this).children(".question-answer").slideToggle(300);
    $(this).toggleClass("active").siblings().removeClass("active");
    $(".question-answer")
      .not($(this).children(".question-answer"))
      .slideUp(300);
  });

  // Services Swiper

  const servicesSwiper = new Swiper(".services .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 800,
    pagination: {
      el: ".services .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
  });

  // Annual Growth
  const annualGrowthSwiper = new Swiper(".annual-growth .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 800,
    pagination: {
      el: ".annual-growth .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".annual-growth .swiper-button-next",
      prevEl: ".annual-growth .swiper-button-prev",
    },
    breakpoints: {
      375: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });

  //********************************************************************************************
  // Fixed nav in Desktop
  if ($(window).width() > 768) {
    $(".menu-item-has-children").on("click", function () {
      $("body").addClass("overflow-hidden");
      $(this).parent().parent().addClass("reset-other-nav");
      $(this).children(".sub-menu").addClass("show-me");
      $(".navigation:not(.reset-other-nav) , .totop-whatsapp-holder").addClass(
        "low-zindex"
      );
    });
    $(".sub-menu").on("click", function (e) {
      $(this).removeClass("show-me");
      $("body").removeClass("overflow-hidden");
      e.stopPropagation();
      $(".navigation:not(.reset-other-nav) , .totop-whatsapp-holder").addClass(
        "low-zindex"
      );
      $(".menu-item-has-children")
        .parent()
        .parent()
        .removeClass("reset-other-nav");
    });
  }

  //********************************************************************************************

  // Remove href from menu item
  $(".menu-item-has-children > a").removeAttr("href");

  //********************************************************************************************

  if ($(window).width() < 768) {
    // Licences swiper
    const licenceSwiper = new Swiper(".licences .swiper", {
      loop: true,
      autoplay: true,
      speed: 1000,
      pagination: {
        el: ".licences .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });

    // mobile nav menu
    $(".menu-item-has-children").click(function () {
      $(this).children(".sub-menu").slideToggle(300);
      $(this).children("a").toggleClass("icon-rotate");
      $(".menu-item-has-children")
        .not($(this))
        .children(".sub-menu")
        .slideUp(300);
      $(".menu-item-has-children")
        .not($(this))
        .children("a")
        .removeClass("icon-rotate");
    });

    // Fixed Heaer
    $(window).on("scroll", function () {
      $(".header").addClass("fixed-header");
      if ($(window).scrollTop() == 0) {
        $(".header").removeClass("fixed-header");
      }
    });

    // open and close mobile nav
    $(".open-nav-btn").on("click", function () {
      $(".navigation").addClass("open-navigation");
      $("body").addClass("overflow-hidden");
      $(".toTop").hide();
    });
    $(".close-nav-btn").on("click", function () {
      $(".navigation").removeClass("open-navigation");
      $("body").removeClass("overflow-hidden");
      $(".toTop").show();
    });

    //   footer mobile menu
    $(".footer-title").click(function () {
      $(this).next(".quick-drop").slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      $(".footer-title").not($(this)).next(".quick-drop").slideUp(300);
      $(".footer-title").not($(this)).removeClass("arrow-rotate");
    });
  } // End of condition

  //********************************************************************************************

  // up btn

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });

  //********************************************************************************************
}); // End document ready
