$('.owl-carousel-one').owlCarousel({
   margin:10,
    autoplay:true,
    loop: false,
    responsiveClass:true,
     dots: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});




$('.owl-carousel-two').owlCarousel({
   margin:10,
    autoplay:true,
    loop: false,
    dots:false,
     nav: true,
  navText: ["<img src='assets/img/left-nav.png'>","<img src='assets/img/right-nav.png'>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
});

$().fancybox({
  selector : '.owl-item:not(.cloned) a',
  hash   : false,
  thumbs : {
    autoStart : true
  },
  buttons : [
    'zoom',
    'download',
    'close'
  ]
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 30) {
    $('.navbar-fixed-top').addClass('opaque');
  } else {
    $('.navbar-fixed-top').removeClass('opaque');
  }
});