new Swiper('.card-wrapper', 
{
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination', 
      clickable : true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsividad de lso productos
    breakpoints:
    {
        250: {
        slidesPerView: 2
        },
        420: {
        slidesPerView: 2
        },
        1024: {
        slidesPerView: 4
        },
    }
  });

  new Swiper('.card-wrapperC', 
    {
        loop: true,
        spaceBetween: 30,
    
        // If we need pagination
        pagination: {
          el: '.swiper-paginationC', 
          clickable : true,
          dynamicBullets: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-nextC',
          prevEl: '.swiper-button-prevC',
        },
    
        // Responsividad de lso productos
        breakpoints:
        {
            250: {
            slidesPerView: 2
            },
            420: {
            slidesPerView: 2
            },
            1024: {
            slidesPerView: 3
            },
        }
      });