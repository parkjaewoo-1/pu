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
})








