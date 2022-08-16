$(document).ready(function () {
  $('.carousel').carousel({
    interval: 5000
  });

  $('*[scroll-to]').click(function (e) {
    var scrollValue = $(this).attr('scroll-to');
    var scrollTime  = $(this).attr('scroll-time');
    e.preventDefault();
    // Default Value.
    scrollTime = 500;
    $('html, body').animate({
      scrollTop: $(scrollValue).offset().top
    }, scrollTime);
  });

});
