const swiper = new Swiper('.swiper', {
  slidesPerView: 3, 
  spaceBetween: 0, 
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});

const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 3, 
  spaceBetween: 0, 
  loop: true,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});
