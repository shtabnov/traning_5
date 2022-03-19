const swiper = new Swiper('.swiper', {
    breakpoints: {
      360: {
        slidesPerView: 1.1,
        spaceBetween: 20
      },
      560: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});