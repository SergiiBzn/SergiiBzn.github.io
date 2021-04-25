$(document).ready(function(){

	$('.about__toggle').click(function(event){
		event.preventDefault();
		console.log('Click!');

		$('.about-content__box').hide();
		var href = $(this).attr('href'); // '#private'

		console.log(href);
		$(href).fadeIn();
	});


	var windowHeight = $(window).height();
	console.log(windowHeight);

	$(window).scroll(function(){
		console.log( $(this).scrollTop() );
		if ( $(this).scrollTop() > windowHeight) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	});

	$('#scrollToTop').click(function(event){
		console.log(11111);
		event.preventDefault();
		$('html').animate({scrollTop: 0}, 800)
	});

});

