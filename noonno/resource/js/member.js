$(function(){
	

	if($('.growth-slide li').length > 0){
		var growthSlide = new Swiper('.growth-slide', {
			navigation: {
				nextEl: '.growth-slider_arrow .swiper-button-next',
				prevEl: '.growth-slider_arrow .swiper-button-prev',
			},
			slidesPerView: 'auto',
			spaceBetween: 70,
			autoplay: {
				delay: 3000,
			},
			loop:true,
			centeredSlides:true,
		});
	}
})









