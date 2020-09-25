$(function(){
  boardNotImage();

  //event thumb hov
  // function eventThumbHover(){
    var eventThumb = $('.event-board .board');
    eventThumb.hover(function(){
      if($(this).find('.thumb').find('.filterLum').length == 0){
        $(this).find('.mousehover').addClass('on');
      }
    },function(){
      $(this).find('.mousehover').removeClass('on');
    });
  // }
})

//board view page img has
function boardNotImage(){
  var brimgBox = $('.br-view-cont .imgbox').length;
  if(brimgBox == 0){
    $('.br-view-cont').addClass('notimg');
  }
}
