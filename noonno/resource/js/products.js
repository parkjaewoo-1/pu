$(function(){
  var toolTipBtn = $('.prd-tooltip'),
  toolTip = $('.tooltip-info');
  toolTip.each(function(i){
    var toolTipW = toolTip.eq(1).width() / 2;
    toolTip.eq(i).css('left','-' + toolTipW + 'px');
    // console.log(toolTipW)
  });
  toolTipBtn.click(function(e){
    e.stopPropagation();
    if($(this).next(toolTip).hasClass('on')){
      $(this).next(toolTip).removeClass('on');
    }else{
      toolTip.removeClass('on'); 
      $(this).next(toolTip).addClass('on');
    }
  });
  $('html,body').on('click',function(){
    toolTip.removeClass('on'); 
  })
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

  $('.detail-wrap .list_tab li a').click(function(){
    tabIdx = $('.detail-wrap .list_tab li a').index(this);

    $('.detail-wrap .list_tab li').removeClass('on');
    $('.detail-wrap .list_tab li').eq(tabIdx).addClass('on');
    $('.detail-wrap .list_content .tab_cont').removeClass('on');
    $('.detail-wrap .list_content .tab_cont').eq(tabIdx).addClass('on');
    TweenMax.to($(window), 0.3, {scrollTo:{y:tabPos-200}});
  });
}
