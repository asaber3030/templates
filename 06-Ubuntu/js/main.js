$(function () {
  $('.toolbar .right-section .language').on('click', function () {
    $('.toolbar .languages').toggle();
  });
  $('.toolbar .right-section .username-app').on('click', function () {
    $('.toolbar .user-settings').toggle();
  });
  $('.toolbar .wifi').on('click', function () {
    $('.toolbar .avaliable-wifis').toggle();
  });
  $(window).on('scroll', function () {
    $('.user-settings, .languages').hide()
  });

  // Actions Of Terminal
  $('.open-cmd').on('dblclick', function () {
    $('.terminal').fadeToggle();
  });
  $('.close-cmd').on('click', function () {
    $('.terminal').fadeOut();
  });

  $('.max-cmd').on('click', function () {
    if ($(this).hasClass('unmax')) {
      $('.terminal').css({
        'width': '901px',
        'height': '375px',
        'position': 'fixed',
        'margin-top': '0'
      });
      $(this).remove('unmax');
    } else {
      $(this).on('click', function () {
        $('.terminal').css({
          'width': '100%',
          'height': '96vh',
          'position': 'absolute',
          'margin-top': '12px'
        });
      });
    }
  });

  // List View
  $('.right .control-lists .fa-list').on('click', function () {
    // Add class to clicked element & remove from other siblings
    $(this).addClass('active').siblings().removeClass('active');
    // Remove flex box proprty from .home-sec
    $('.right .home-sec').css('display', 'block');
    // Add Text Align Left to apps
    $('.right .home-sec .app').css('text-align', 'left');
    // Recustomize Picture
    $('.right .home-sec .app img').css({
      'margin': '0',
      'display': 'inline',
      'vertical-align': 'middle'
    });
  });

  // Table View
  $('.right .control-lists .fa-table').on('click', function () {
    // Add class to clicked element & remove from other siblings
    $(this).addClass('active').siblings().removeClass('active');
    // Add flex box proprty To .home-sec
    $('.right .home-sec').css('display', 'flex');
    // Add Text Align Center to apps
    $('.right .home-sec .app').css('text-align', 'center');
    // Recustomize Picture
    $('.right .home-sec .app img').css({
      'margin': 'auto',
      'display': 'block',
      'margin-bottom': '8px'
    });
  });

});
