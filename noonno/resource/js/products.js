$(function(){
  $(document).ready(function(){
    $('.detail-wrap .tab_cont').hide();
    $('.detail-wrap .tab_cont').eq(0).show();
  });
  
  productsListInput();

  if($('.prd-thumb-slider li').length > 1){
    $('.pagination .swiper-button-next').css('display','inline-block');
    $('.pagination .swiper-button-prev').css('display','inline-block');
    var Detailslider = new Swiper('.thumb-slider',{
      pagination: {
        el: '.pagination .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.pagination .swiper-button-next',
        prevEl: '.pagination .swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
      loop:true,
    });
  }

  detailTab();
  lvSelect();
});

function productsListInput (){
  var prdCont = $('.prd');
  prdCont.each(function(i){
    prdchkbox = $(this).find('input').attr('id');
    $(this).find('input').attr('id','prdcont'+i);
    $(this).find('label').attr('for','prdcont'+i);
  })
}
function detailTab(){
  var headerH = $('.gnb_wrap').height(),
  tabPos = $('.list_tab').offset().top,
  fixedTab = $('.list_tab > ul'),
  tabH = $('.list_tab > ul').height(),
  actionTabPos = tabPos+tabH;

  $(window).scroll(function(){
    var scrollT = $(window).scrollTop();
    if(actionTabPos < scrollT){
      fixedTab.addClass('fixed').css('top',headerH);
    }else{
      fixedTab.removeClass('fixed').css('top','0');
    }

  });

  if($('.dt-sample-slide li').length > 0){
    var sampleSettings = {
      navigation: {
        nextEl: '.dt-sample-slider_arrow .swiper-button-next',
        prevEl: '.dt-sample-slider_arrow .swiper-button-prev',
      },
      pagination: {
        el: '.dt-sample-pag .swiper-pagination',
        clickable: true,
      },
      speed: 800,
      slidesPerView: 'auto',
      spaceBetween: 120,
      // autoplay: {
      // 	delay: 3000,
      // },
      loop:true,
      centeredSlides:true,
    },
    dtSampleSlide = new Swiper ('.dt-sample-slide',sampleSettings);
  }
  
  $('.detail-wrap .list_tab li a').click(function(){
    tabIdx = $('.detail-wrap .list_tab li a').index(this);

    $('.detail-wrap .list_tab li').removeClass('on');
    $('.detail-wrap .list_tab li').eq(tabIdx).addClass('on');
    $('.detail-wrap .list_content .tab_cont').hide();
    $('.detail-wrap .list_content .tab_cont').eq(tabIdx).show();
    TweenMax.to($(window), 0.3, {scrollTo:{y:tabPos-200}});
    if(tabIdx == 2){
      dtSampleSlide = new Swiper ('.dt-sample-slide',sampleSettings);
    }else{
      dtSampleSlide.destroy();
    }
    
  });
}

function lvSelect(){
  $('.lv_btn').click(function(){
    var _thIdx = $('.lv_btn').index(this);
    $('.lv_btn').removeClass('on');
    $('.lv_btn').eq(_thIdx).addClass('on')
  });
}
