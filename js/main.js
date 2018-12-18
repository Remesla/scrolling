$(document).ready(function() {
	$('#main-nav').removeClass('scrolling');
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('#main-nav').addClass('scrolling').fadeIn('fast');
		} else {
			$('#main-nav').removeClass('scrolling').fadeIn('fast');
		}
	});

});