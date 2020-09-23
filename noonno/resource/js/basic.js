(function($){

  //board view page  img has
  
  $(document).ready(function(){
    var brimgBox = $('.br-view-cont .imgbox').length;
    console.log(brimgBox)
    if(brimgBox == 0){
      $('.br-view-cont').addClass('notimg');
    }
  });
  
})(jQuery)