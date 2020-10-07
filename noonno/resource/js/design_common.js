
var power4 = 'power4.out';
var slow =  'Expo.easeOut'
$(document).ready(function(){

    gnb();
    brandSite();
    locaMenu();
    shareBtn();
    compareBox();
    aboutTab();
})


function gnb(){

    $('.gnb > ul > li > a').mouseenter(function(){
      $('.gnb_bottom').addClass('on');
      TweenMax.to( '.depth_02 > li > a', 0.6, {autoAlpha: 1, display:'inline-block', ease:power4, });
	  //$('.depth_02').slideDown('fast');





    });

    $('.gnb_wrap').mouseleave(function(){
		TweenMax.to( '.depth_02 > li > a', 0.1, {autoAlpha: 0, display:'none', ease:power4, onComplete:function(){
			 $('.gnb_bottom').removeClass('on');
		}});
      //$('.depth_02').slideUp('fast');
      //$('.depth_02 > li > a').fadeOut('fast');



    });

}

function brandSite(){
  $('.brand_site > .tit').mouseenter(function(){

    $(this).next('.brand_open').show();
  });
   $('.brand_open').mouseleave(function(){

    $(this).stop().hide();
  });
}
function locaMenu(){
    $('.loca_sel').click(function(){
        if( $(this).hasClass('on') == true){
            $(this).removeClass('on');
            $(this).children('.hidden_div').stop().slideUp('fast');
        }else{
            $(this).children('.hidden_div').stop().slideDown('fast');
            $(this).addClass('on');
        }


    })

    $('.loca_sel').mouseleave(function(){

    });
}
function shareBtn(){
    $('.share_btn > span').click(function(){
        if( $(this).hasClass('on') == true ){

            $(this).removeClass('on');

            $(this).next('.hidden_share').fadeOut('fast');
        }else{
            $(this).addClass('on');

            $(this).next('.hidden_share').fadeIn('fast');
        }

    });
}
function compareBox(){
    $('.prd input').on('change', function(){

        TweenMax.to('.compare_box', 0.6, {bottom:'0', ease:power4});
        $('.compare_box').addClass('on');
        $('.compare_box .tit').addClass('on');
    });
     $('.compare_box > .tit').click(function(){
        var thP = $(this).parent('.compare_box');
        if( thP.hasClass('on') == true){
            $(this).removeClass('on');
            thP.removeClass('on');
            TweenMax.to(thP, 0.6, {bottom: '-350px', ease:power4});
            $('.tab_cont').removeClass('on')
        }

     });
     $('.compare_btn').click(function(){


     });


}
function aboutTab(){

    $('.edu_service .list_tab li').click(function(){
        var tIdx = $(this).index();

        $('.edu_service .list_tab li.on').removeClass('on');
        $(this).addClass('on');
         $('.edu_service .list_content .tab_cont.on').removeClass('on');
        $('.edu_service .list_content .tab_cont').eq(tIdx).addClass('on');

    });
}


//레이어팝업

function layerPopOpen(obj){// 레이어팝업 열기, obj : 해당팝업 id


    var thisPop = $('#'+obj).find('.layer_pop');
    var winW = $(window).width();
    var winH = $(window).height();

    //dimOn();
    if($('#'+obj).length >= 1){
        $('#'+obj).addClass('open');
        $('html, body').css('overflow','hidden');


    }


}

function layerPopClose(obj){// 레이어팝업 닫기, obj : 해당팝업 id
    console.log('close');
    $('#'+obj).removeClass('open');
    $('html, body').css('overflow','auto');
    $('body').removeAttr('style');



}
