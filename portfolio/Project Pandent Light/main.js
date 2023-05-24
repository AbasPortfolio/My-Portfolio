const btnMenu = document.querySelector('.trigger'),
      menuClass = document.querySelector('nav');

btnMenu.addEventListener('click', () =>{
    menuClass.classList.toggle('showmenu')
})

// on or off toggle
const btnLight = document.querySelector('.t-light'),
      addClass = document.querySelector('.site');
btnLight.addEventListener('click', function() {
    addClass.classList.toggle('turnon')
})
// carousel
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        641: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        },
    },
  });

