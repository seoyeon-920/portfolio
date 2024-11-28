$(function () {
  AOS.init();

  const cursor = document.querySelector('.cursor');
  const cursorTrail = document.querySelector('.cursor-trail');

  // 마우스 이동 이벤트
  document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;

    // 커서 위치 설정
    cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;

    // 트레일 위치 설정
    cursorTrail.style.transform = `translate(${x - 50}px, ${y - 50}px) scale(1)`;
  });

  // 클릭 시 물방울 효과 애니메이션
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(1.5)';
    cursor.style.opacity = '0.8';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.opacity = '1';
  });

  let helloTop = $('.hello h1').offset().top - 300;
  $(window).scroll(function () {
    let st = $(this).scrollTop();
    if (st >= helloTop) {
      $('.hello').addClass('on');
    } else {
      $('.hello').removeClass('on');
    }
  })

  let tog = $('nav');

  tog.on("click", function () {
    $(this).toggleClass('closed').toggleClass('open');
  });


  $('section.contents ul.right li').hover(function(){
    $(this).addClass('on').siblings().removeClass('on');
  },function(){
    $('section.contents ul.right li').removeClass('on');
  })
});