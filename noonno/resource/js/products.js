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
});