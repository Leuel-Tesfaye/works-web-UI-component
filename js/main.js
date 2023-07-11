

  const swup = new Swup(options);

  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector('#scrollbar'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector('#scrollbar2'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  

  // portfolio filter
  $('.art-filter a').on('click', function() {
    $('.art-filter .art-current').removeClass('art-current');
    $(this).addClass('art-current');

    var selector = $(this).data('filter');
    $('.art-grid').isotope({
      filter: selector
    });
    return false;
  });

  // masonry Grid
  $('.art-grid').isotope({
    filter: '*',
    itemSelector: '.art-grid-item',
    transitionDuration: '.6s',
  });

  

  // slider works
  var swiper = new Swiper('.art-works-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-works-swiper-next',
      prevEl: '.art-works-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  