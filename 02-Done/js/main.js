
/*global $*/
$(function () {

  // Scroll function
  $('*[scroll-to]').click(function (e) {
    var scrollValue = $(this).attr('scroll-to');
    var scrollTime  = $(this).attr('scroll-time');
    e.preventDefault();
    // Default Value.
    scrollTime = 300;
    $('html, body').animate({
      scrollTop: $(scrollValue).offset().top - 75
    }, scrollTime);
  });

  $('*[selective-no]').on('copy paste cut', function (e) {
    e.preventDefault();
  });

  // Navigation Bar Trick
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    // if (scrollTop >= 900) {
    //   $('#navbar').animate({
    //     top: 0,
    //     left: 0,
    //     width: '100%'
    //   });
    // } else {
    //   $('#navbar').css({
    //     position: 'relative'
    //   });
    // }
  });

   // Show Navigation Bar Of Mobile
   $('.navbar-mobile .dropdown-nav i').click(function () {
     $('.navbar-mobile .dropdown-nav ul').slideToggle(400);
   });
   $('.navbar-mobile .dropdown-nav ul li').click(function () {
     $(this).parent().hide();
   });

});
