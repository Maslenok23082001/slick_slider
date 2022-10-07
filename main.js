$(document).ready(function(){
	$('.wrapper_slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScrool: 1,
		
		prevArrow: "<img src='https://svgshare.com/i/nDs.svg' class='prev' alt='1'>",
    	nextArrow: "<img src='https://svgshare.com/i/nEk.svg' class='next' alt='2'>",
		responsive: [
			{
				breakpoint: 800,
				settings:{
					slidesToShow: 1,
					slidesToScrool: 1,
					infinite: true
				}
			}
		]
	})
});