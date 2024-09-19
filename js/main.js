
// On window load 
$(window).on("load", function () {
  $(".preloader").fadeOut();
});

  //********************************************************************************************

$(document).ready(function () {
  // Services Swiper

  const servicesSwiper = new Swiper(".services .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 1000,
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

  //********************************************************************************************

  if ($(window).width() > 768) {
    // Fixed nav in Desktop
    $(".menu-item-has-children").on("click", function () {
      $(".totop-whatsapp-holder").hide();
      $("body").addClass("overflow-hidden");
      $(this).parent().parent().addClass("show-submenu");
          $(".ar-navigation").addClass("reset-ar-navigation");
          $(".en-navigation").addClass("reset-en-navigation");
      $(".menu-item-has-children")
        .not(this)
        .parent()
        .parent()
        .addClass("low-zIndex");
    });
    $(".sub-menu").on("click", function (e) {
      $(".totop-whatsapp-holder").show();
      $("body").removeClass("overflow-hidden");
      e.stopPropagation();
      $(".menu-item-has-children")
        .parent()
        .parent()
        .removeClass("show-submenu")
        .removeClass("low-zIndex");
       $(".ar-navigation").removeClass("reset-ar-navigation");
       $(".en-navigation").removeClass("reset-en-navigation");
    });
  } // End of condition

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
