$(function () {

  $("#datepicker").datepicker({ firstDay: 1 });




  let mainswiper = new Swiper(".main_visual", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,

  });


  let articleswiper = new Swiper(".article_slide_all", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 40,
    slidesPerView: 1,
    initialSlide: 0,
    coverflowEffect: {
      scale: 1,
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      // slideShadows: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        coverflowEffect: {
          scale: 0.8,
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          // slideShadows: true,
        },
      },
      1024: {
        slidesPerView: 3,
        coverflowEffect: {
          scale: 0.95,
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          // slideShadows: true,
        },
      },
    },
    // pagination: {
    //   el: ".article_slide_all .swiper-pagination",
    //   type: "fraction",
    // },
    navigation: {
      nextEl: ".article_slide_all .swiper-button-next",
      prevEl: ".article_slide_all .swiper-button-prev",
    },
    //질문  ! 페이지네이션 안돼요ㅠ

  });

  var scheduleswiper = new Swiper(".schedule .slide", {
    slidesPerView: 2,
    // centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      637: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
    breakpoints: {
      834: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
    },
    breakpoints: {
      835: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
    },
    breakpoints: {
      1094: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    breakpoints: {
      1330: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

  });

  AOS.init();
});

