$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false
  });

var prevScrollPos = 0;
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - prevScrollPos > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      prevScrollPos = scrollTop;
    } else if (prevScrollPos - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      prevScrollPos = scrollTop;
    }
  });
});
