$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
      $('nav').addClass('fixed-header');
      $('nav div').addClass('visible-title');
  }
  else {
      $('header').removeClass('fixed-header');
      $('header').removeClass('visible-title');
  }
});

