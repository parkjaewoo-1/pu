$(function(){
	var tabTit = $(".member_tab > li"),
	tabCon = $(".member_tabcon > li");
	tabTit.click(function(){       
		var result = $(this).index();	
		tabTit.removeClass("on");     
		$(this).addClass("on");       
		tabCon.removeClass("on");			
		tabCon.eq(result).addClass("on");		
	});

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
})








