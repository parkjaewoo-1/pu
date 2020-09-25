
var power4 = 'power4.out';
var slow =  'Expo.easeOut'
$(document).ready(function(){

    gnb();
    brandSite();
    locaMenu();
    shareBtn();
})


function gnb(){

    $('.gnb > ul > li > a').mouseenter(function(){
      $('.depth_02').slideDown('fast');
      $('.gnb_bottom').addClass('on');

    });

    $('.gnb_wrap').mouseleave(function(){
      $('.depth_02').slideUp('fast');
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
