$(function(){
  
});
$(document).ready(function(){
  mapPosition();
});
function mapPosition(){
  var posArr = [],
  posCont = $('.gr-width'),
  _leng = $('#age-select-sort li'),
  overWAl = $('#age-select-sort li.type2').position().left * 10 / 100;

  // 100 * 10 / 100          10%

  for(var i = 0; i < _leng.length ; i++){
    var _thisPos = _leng.eq(i).position().left;
    posArr.push(_thisPos);
  }

  posCont.each(function(i){
    var posSort = $(this).attr('data-startpos');
    $(this).css('left',posArr[posSort]);
    
  });


}
