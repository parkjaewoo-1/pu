$(function(){
  var toolTipBtn = $('.prd-tooltip'),
  toolTip = $('.tooltip-info');
  toolTip.each(function(i){
    var toolTipPos = toolTip.eq(i).offset().left,
    toolTipW = (toolTip.eq(i).width() / 2) + 3;
    toolTip.eq(i).css('left','-' + toolTipW + 'px');
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
});

function productsListInput (){
  var prdCont = $('.prd');
  prdCont.each(function(i){
    prdchkbox = $(this).find('input').attr('id');
    $(this).find('input').attr('id','prdcont'+i);
    $(this).find('label').attr('for','prdcont'+i);
  })
}