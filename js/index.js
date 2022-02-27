window.addEventListener('click', function(e) {
   e.preventDefault();
}, false);

$(document).ready(function(){
   $('.accessories__sliders').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1199,
            settings: {
            //   centerPadding: '40px',
              slidesToShow: 5
            }
         },
         {
            breakpoint: 992,
            settings: {
            //   arrows: false,
            //   centerMode: true,
            //   centerPadding: '40px',
              slidesToShow: 3
            }
         },
         {
           breakpoint: 768,
           settings: {
             arrows: false,
             centerMode: true,
             slidesToShow: 4
           }
         },
         {
           breakpoint: 480,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 1
           }
         }
      ]
   });
});

$('.burger').on('click', () => {
   $('.nav').toggleClass('active');
})


$(window).on('scroll', function () {
   var scroll = $(window).scrollTop();
   if (scroll < 400) {
     $(".header").removeClass("fixed");
   } else {
     $(".header").addClass("fixed");
   }
});
