$(function(){
  fixedEl('.gnb_wrap','.map-table-tit','.mp-table-tit-box');
  viewEvent();
  ageTypeClick();

});
$(document).ready(function(){
  mapPosition();
  mapContTitClick();
});
function mapPosition(){
  var posArr = [],
  posCont = $('.gr-width'),
  _leng = $('#age-select-sort li'),
  overWidth = $('#age-select-sort li.type2').position().left * 10 / 100;   // = 14.4

  for(var i = 0; i < _leng.length ; i++){
    var _thisPos = _leng.eq(i).position().left -1 ;
    posArr.push(_thisPos);
  }

  posCont.each(function(i){
    var posSort = $(this).attr('data-startpos'),
    widthSort = $(this).attr('data-overwidth');
    if(widthSort > 0){
      $(this).css('left',(overWidth*widthSort) + posArr[posSort]);
    }else{
      $(this).css('left',posArr[posSort]);
    }
  });
}


function mapContTitClick(){
  var clBtn = $('.map-cont-tit-box');
  var acbox = $('.map-cont-cont');
  clBtn.click(function(){
    var btIdx = $('.map-cont-tit-box').index(this);
    
    $('.gr-line > div').find('button').addClass('type-notsel');
    
    if(!$(this).hasClass('active')){
      acbox.eq(btIdx).find('button').removeClass('type-notsel');
      clBtn.removeClass('active');
      $(this).addClass('active');
    }else{
      $('.gr-line > div').find('button').removeClass('type-notsel');
      $(this).removeClass('active');
    }

    
  });
}


function ageTypeClick(){
  var typeBtn = $('#age-select-sort > li');

  typeBtn.each(function(i){
    $(this).attr('data-cl-type','type'+i);
  });
  
  typeBtn.click(function(){
    var _type = $(this).attr('data-cl-type');

    $('.gr-line > div').find('button').removeClass('type-notsel');

    $('.gr-line > div').each(function(i){
      var comtype = $('.gr-line > div').eq(i).attr('class');
      if(!$(this).hasClass(_type)){
        $(this).find('button').addClass('type-notsel');
      }
    });

    if(!$(this).hasClass('active')){
      typeBtn.removeClass('active');
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
      $('.gr-line > div').find('button').removeClass('type-notsel');
    }

  });
}



function viewEvent(){
  var viewBtn = $('.gr-line button'),
  viewWrap = $('.map-view-wrap'),
  close = $('.map-view-wrap .close');

  viewBtn.on('click',function(){
    viewWrap.addClass('on');
    $('html,body').css({
      'overflow':'hidden',
    });
    
  });
  close.on('click',function(){
    viewWrap.removeClass('on');
    $('html,body').css({
      'overflow':'auto',
    })
  });
}
