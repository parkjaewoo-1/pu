
var power4 = 'power4.out';
var slow =  'Expo.easeOut'
$(document).ready(function(){

    gnb();
    brandSite();
    locaMenu();
    shareBtn();
    compareBox();
})


function gnb(){

    $('.gnb > ul > li > a').mouseenter(function(){
        $('.depth_02 > li > a').fadeIn('fast');
      $('.depth_02').slideDown('fast');

      $('.gnb_bottom').addClass('on');



    });

    $('.gnb_wrap').mouseleave(function(){
      $('.depth_02').slideUp('fast');
      $('.depth_02 > li > a').fadeOut('fast');

      $('.gnb_bottom').removeClass('on');

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
    $('.loca_sel').mouseenter(function(){
        $(this).children('.hidden_div').stop().slideDown('fast');
    })

    $('.loca_sel').mouseleave(function(){
        $(this).children('.hidden_div').stop().slideUp('fast');
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
    $('.compare_box > .tit').click(function(){
        var thP = $(this).parent('.compare_box');
        if( thP.hasClass('on') == true){
            $(this).removeClass('on');
            thP.removeClass('on');
            TweenMax.to(thP, 0.6, {bottom: '-350px', ease:power4});
            $('.tab_cont').removeClass('on')
        }else{
            $(this).addClass('on');
            thP.addClass('on');
            TweenMax.to(thP, 0.6, {bottom:'0', ease:power4});
            $('.tab_cont').addClass('on');
        }
    });


}
