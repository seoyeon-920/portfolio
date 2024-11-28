$(function () {
  let swiper = new Swiper(".main_visual", {
    slidesPerView: 'auto',
    spaceBetween: 180,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    initialSlide: 1,
    loop: true,
    navigation: {
      nextEl: ".main_visual .next",
      prevEl: ".main_visual .prev",
    },
  });


  let swiper2 = new Swiper(".support .slide", {
    loop: true,
    pagination: {
      el: ".support .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".support .right",
      prevEl: ".support .left",
    },
    on: {
      init: function () {
        updatePagination(this);
      },
      slideChange: function () {
        updatePagination(this);
      },
    },

  });
  // 첫 번째와 두 번째 페이지네이션을 동기화하는 함수
  function updatePagination(swiper) {
    const activeIndex = swiper.realIndex; // 실제 활성 슬라이드 인덱스

    // 모든 페이지네이션 요소 가져오기
    const primaryBullets = document.querySelectorAll('.side li');

    // 페이지네이션 활성화 상태 업데이트
    updateActiveBullet(primaryBullets, activeIndex);
  }

  // 활성화된 페이지네이션 표시를 업데이트하는 함수
  function updateActiveBullet(bullets, activeIndex) {
    bullets.forEach((bullet, index) => {
      if (index === activeIndex) {
        bullet.classList.add('active');
      } else {
        bullet.classList.remove('active');
      }
    });
  }

  // 페이지네이션 클릭 이벤트 설정
  document.querySelectorAll('.side li').forEach((bullet) => {
    bullet.addEventListener('click', function () {
      const index = parseInt(this.dataset.index);
      swiper2.slideToLoop(index); // 슬라이드 이동
    });
  });
  AOS.init();

  $('section.notice ul.tabmenu li').click(function(){
    $('section.notice ul.tabmenu li,section.notice ul.tabcon>li').removeClass('on');
    $(this).addClass('on');
    let i = $(this).index();
    // console.log(i);
    $('section.notice ul.tabcon>li').eq(i).addClass('on');
  });
});