/*global $*/
$(function () {
	'use strict';

	// Set target Attribute to All work section links
	$('.my-work a:not(.disabled)').attr('target', '_blank');

	// Add Class fa-lg to social media icons & Set links Attribute target = _blank
	$('.follow-me i').addClass('fa-lg');
	$('.follow-me a').attr('target', '_blank');

	/* Show navbar on small screens */
	$('.navbar-main ul li.open-nav-responsive').on('click', function () {
		$('.navbar-main .responsive-links').slideToggle();
	});

	function scroll(to) {

		$('html, body').animate({
			scrollTop: $(to).offset().top
		}, 1000);

	}


	$('.navbar-main ul li:eq(0)').on('click', function () {
		scroll('.intro');
	});
	$('.navbar-main ul li:eq(1)').on('click', function () {
		scroll('.about');
	});
	$('.navbar-main ul li:eq(2)').on('click', function () {
		scroll('.services');
	});
	$('.navbar-main ul li:eq(3)').on('click', function () {
		scroll('.my-work');
	});
	$('.navbar-main ul li:eq(4)').on('click', function () {
		scroll('.contact');
	});
	$('.navbar-main ul li:eq(5)').on('click', function () {
		scroll('.follow-me');
	});

	$('.intro button:eq(0)').on('click', function () {
		scroll('.contact');
	});
	$('.intro button:eq(1)').on('click', function () {
		scroll('.about');
	});


	$(window).on('load', function () {
    $('.my-work .controls #main-btn-all').click();
  });

  $('.my-work .moving .controls button').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.my-work .controls button[data-filter]').click(function () {

    var dataBtn = $(this).attr('data-filter');

    $('.my-work .works .def-work-div[data-get=' + dataBtn + ']').css('display', 'block').siblings().css('display', 'none');

  });

  $('.my-work .controls #main-btn-all').click(function () {
    $('.my-work .works .def-work-div').show();
  });


});
