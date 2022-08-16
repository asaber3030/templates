$(function () {

  /* Navigation Bar Scroll To Element */

  $('#navbar li').click(function (e) {
    $(this).addClass('active').siblings().removeClass('active');
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top - 75
    }, 750);
  });

  //-------------------------------------------------------\\

  /* Scrolling Adding Class active to links */

  $(window).scroll(function () {

    // Add a bg Color to Navigation bar after scrolling a destence
    if ($(this).scrollTop() >= 600) {
      $('#navbar').addClass('navbar-bg');
    } else {
      $('#navbar').removeClass('navbar-bg');
    }

    // Sync Links with Sections
    $('.block-section').each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 300) {
        sectionID = $(this).attr('id');

        $('#navbar ul li[data-scroll="' + sectionID +'"]').addClass('active').siblings().removeClass('active');
      }
    });

    // Scroll to top Function
    var scrollToTop = $('.scrollToTop');
    if ($(this).scrollTop() >= 1200) {
      if (scrollToTop.is(':hidden')) {
        scrollToTop.fadeIn(600);
      }
    } else {
      scrollToTop.fadeOut(600);
    }

  });

  //-------------------------------------------------------\\

  /* Scroll to top */
  $('.scrollToTop').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  });

  //-------------------------------------------------------\\

  /* About Section */
  $('#about-us .left-section ul li').click(function () {
    // Toggle Active Class
    $(this).addClass('active').siblings().removeClass('active');

    var clickedData = $(this).attr('data-click-list');
    $('#about-us .right-section div[data-list="' + clickedData + '"]').slideDown(500).siblings().hide();
  });

  //-------------------------------------------------------\\

  /* Open Mobile Navigation Bar */

  $('#navbar-mob .links i').click(function () {
    $('#navbar-mob .links ul').fadeToggle();
  });

});
