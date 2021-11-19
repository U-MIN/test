$(function(){
    //visual area swiper
    const swiper = new Swiper('.visual', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: true,
        //   },
      
        // If we need pagination
        pagination: {
            el: ".visual-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
          },

      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });



    //monthly
    var swiper1 = new Swiper(".monthly", {
      loop: true,
      slidesPerView: 5,
      centeredSlides:true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
  //     // Responsive breakpoints
  //     breakpoints: {
  //       // when window width is >= 320px
  //       500: {
  //         slidesPerView: 2,
  //         spaceBetween: 20
  //       },
  //       // when window width is >= 480px
  //       990: {
  //         slidesPerView: 3,
  //         spaceBetween: 30
  //       },
  //       // when window width is >= 640px
  //       1200: {
  //         slidesPerView: 5,
  //         spaceBetween: 40
  //       }
  // }  


    });


});