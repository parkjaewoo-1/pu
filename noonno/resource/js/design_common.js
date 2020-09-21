
var power4 = 'power4.out';
var slow =  'Expo.easeOut'
  $(document).ready(function(){
    
    
    if( $('.wrap').hasClass('sub') == true ){
      gnbScroll();
      gotoTop();
      main_dimed();
      qna_list();
      inq_popup();
      customScroll();
      tabui();
      prd_popup();
      catalog();
      c_motion();
      visibleShow();
      ceo_motion();
      lab();
      outline_motion();
    }
      gnbOpen();
      main_dimed();
      locationJs();
      allMenu();

    $(window).scroll(function(){
      visibleShow();
    });
    
  
  });



function main_dimed(){
  TweenMax.to( '.dimed.w', 0.1, {opacity: 0, display: 'none',  ease:power4}  )

}
function gnbOpen(){
  
  $('.sub_depth ul').each(function(){

    //console.log('start');
    var L = $(this).children('li');
    var LL = L.length;
    var LLL = LL - 1;
    var li_ary = new Array();
    var Lisum = 0;

    //console.log(LL);

    for(var i=0; i < LL; i++){
      var l_width = L.eq(i).width();
      li_ary.push(l_width);
      
      Lisum += li_ary[i];

      // console.log(li_ary);
     

    }


    
    $(this).width( Lisum + (LLL * 50) );
    //console.log('end');
    setTimeout(function(){
      $('.sub_depth > .before').width(0);
      $('.sub_depth').hide();

    }, 1 );
    //$('.sub_depth > .before').width(0);

   

  });
  
  $('.menu ul li').mouseenter(function(){
    console.log('enter');
    $('.wrap .gnb_inbox .menu').css({border:'none'});
    $('.sub_depth ul').hide();    
    var idx = $(this).index();
    //console.log(idx);
    $('.sub_depth').slideDown('fast');

    $('.sub_depth ul').eq(idx).show();

    var ulW = $('.sub_depth ul').eq(idx).width();
    var ulWP = ulW + 150  
    //console.log(ulW);

      
    TweenMax.to( '.sub_depth > .before', 0.3, {width: ulWP, ease:power4}  )

  });

  $('.gnb_box').mouseleave(function(){

    TweenMax.to( '.sub_depth > .before', 0.3, {width: 20, ease:power4}  )
    setTimeout(function(){
      $('.sub_depth').slideUp();

    }, 200 );
    

  });


}

function locationJs() {
    var $selectPcBtn = $(".selepcbtn");
    


    $selectPcBtn.click(function (e){
      //console.log('click');
      e.stopPropagation();
      var _pcseleBtn = $(this);
      var _selectPcWrap = _pcseleBtn.parent(".opt");
      var _pcselectLst = $(this).siblings(".optul");
      var _pcselectLength = _pcselectLst.children("li").length;
      var _pcselectHeight = 25 * _pcselectLength + 30;

      //_selectPcWrap.addClass('active');
      
    
    if (  _selectPcWrap.hasClass("active") == 1 ) {
      console.log('cloes');
      //close


      TweenMax.to( _pcselectLst, 0.3, 
      { height: 0, padding: "",  
       ease: Expo.ease, onComplete: pcseleCls }
      );

      function pcseleCls() {
      _pcseleBtn.parent(".opt").removeClass("active");
      }

    } else {

      //open
      _pcseleBtn.parent(".opt").addClass("active");

      TweenMax.to( _pcselectLst, 0.3, 
      { delay: 0.2, height: _pcselectHeight, padding: "15px 20px", ease: Expo.ease}
      ); 

    }

    });

    //셀렉트를 제외한 영역 클릭시 닫기 이벤트
    $("body").click(function () {

    TweenMax.to( $(".optul"), 0.3, 
      { height: 0, padding: "",  
       ease: Expo.ease, onComplete: pcseleClsWhole }
    );        
    function pcseleClsWhole() {
      $(".opt").removeClass("active");
    }        
    });





    var $selectPcArray = $("ul.optul li");

    $selectPcArray.click(function (){
    var _thisTxt = $(this).text();
    var _thisDataVal = $(this).data("value");

    var _chgtarget = $(this).parent(".optul").siblings("button.selepcbtn"); 
    var _rstSelect = $(this).parent(".optul").parent(".opt.pc");
    var _closeSelect = $(this).parent(".optul");

    //클릭 시
    // 배열에서 버튼으로 str값 이동
    _chgtarget.text( _thisTxt) 

    // 배열에서 버튼으로 data-value값 이동
    _chgtarget.attr("data-value", _thisDataVal) 

    TweenMax.to( _closeSelect, 0.3, 
      { height: 0, padding: "",  
      ease: Expo.ease, onComplete: pcseleRst}
    );

    function pcseleRst() {
      _rstSelect.removeClass("active");
    }

    });


}

function allMenu(){
  $('.all_menu').click(function(){

    $(this).addClass('active');
    $('.all_menu_dimed').fadeIn('fast');
  });
}

function gnbScroll(){
  $(window).scroll(function(){
    //console.log('scroll');
    var scrollT = $(document).scrollTop();

    var menuT = $('.gnb_inbox').offset().top;
    //console.log(scrollT , 'scrollT');
    //console.log(menuT, 'menuT');
    

    if(scrollT > 113){

      $('.gnb_wrap').addClass('active');
    }else{
      $('.gnb_wrap').removeClass('active');
    }

  });
}

function gotoTop(){
  $(document).on('click', '.goto_top', function(e){
      e.preventDefault();
      $('html, body').stop().animate({scrollTop :0})
  })
  $(window).scroll(function(){
    var winSc = $(this).scrollTop();
    var position = $(window).scrollTop();
    var footP = $('.footer').offset().top;
    var wh = $(window).height();
    console.log(footP)
      if(winSc > 0){
              console.log(position)
              $('.goto_top').addClass('fixed');
              if( position + wh >= footP  ){
            $('.goto_top').addClass('stop');

          }else{
                  $('.goto_top').removeClass('stop');
              }
          }else{
             
              $('.goto_top').removeClass('fixed');
          }
  });
}


  // motion event
  function visibleShow(){

    $('.motion').each(function(){
      var windowOneViewHeight = $(window).height() / 1000;
      var top_of_object = $(this).offset().top + ( (windowOneViewHeight * 10)); // no also add the item height, only the offset top is needed
      var bottom_of_object = $(this).offset().top + ($(this).outerHeight() - (windowOneViewHeight * 10));
      var top_of_window = $(window).scrollTop();
      var bottom_of_window = $(window).scrollTop() + $(window).height();  

      if(bottom_of_object < top_of_window) {
        //console.log("위로올림2")
        //$(this).removeClass("active");
      }
      else if (top_of_object > bottom_of_window){
        //console.log("위로올림1")
        //$(this).removeClass("active");
      }   
      else if(bottom_of_object > top_of_window && top_of_object < bottom_of_window){
        $(this).addClass("active");
      }
    });

  }


// 자주묻는 질문
function qna_list(){
  var qnaBtn = $('.qna_list ul li');

  qnaBtn.click(function(){
    var _thisBtn = $(this);
    var _thisAnswer = _thisBtn.children('.answer');

    if(_thisBtn.hasClass('on') == 1){
      _thisAnswer.slideUp(200);
      _thisBtn.removeClass('on');

    }else{
      $('.qna_list ul li').removeClass('on');
      $('.answer').slideUp(200);
      _thisAnswer.slideDown(200);
      _thisBtn.addClass('on');
    }
  });
};

// 1:1 문의 팝업
function inq_popup(){
  $('.agree_area a').click(function(){
    $('.popup_area').addClass('on');
     setTimeout(function(){
      $('.popup_area .wrap a.close').css('display','block');
    }, 300);
    TweenMax.to($(".popup_inner"), .3, {"z-index":100, height: 525, padding: "70px 10px 60px 70px", ease: Expo.ease});
  });
  $('.popup_area .wrap a.close').click(function(){
    $('.popup_area .wrap a.close').css('display','none');
     TweenMax.to($(".popup_inner"), .3, {"z-index":100, height: 0, padding: "0", ease: Expo.ease});
     setTimeout(function(){
      $('.popup_area').removeClass('on');
     }, 200);
  });
}


// 팝업 커스텀 스크롤
function customScroll(){
   $('.popup_inner').mCustomScrollbar({
      theme: "light-3",
    });
}






// 증명서 팝업
function prd_popup(){
  $('.list_wrap.prd li').click(function(){
    $('.prd_popup').fadeIn();
  });
  $('.prd_popup .wrap a.close').click(function(){
     $('.prd_popup').fadeOut();
  });
}


// 카탈로그 마우스 오버 시 이미지
function catalog(){
  
  $('.list_wrap.catalog').mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    $('.ctl').css("left", mouseX+15).css("top", mouseY+15);
  });

  $(window).scroll(function(){
    var scTop = $(window).scrollTop();

    $('.list_wrap.catalog').mousemove(function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY - scTop;
      $('.ctl').css("left", mouseX+15).css("top", mouseY+15);
    });

  });

}



// 회사개요
function outline_motion(){
  TweenMax.to($(".top_bg"), .4, {delay: 0.5, opacity: '1', height: 550, ease: Circ.easeOut, onComplete:title});

  function title(){
    TweenMax.to($(".outline.cont_01 p.title"), .3, {opacity: '1', bottom: 13, ease: Expo.ease, onComplete:image});
  }

  function image(){
    TweenMax.to($(".outline.cont_01 .table .ef"), .4, {opacity: '1', width: 480, ease: Circ.easeInOut});
    TweenMax.to($(".outline.cont_01 .table .text_box"), .3, {delay: 0.5, opacity: '1', paddingTop: '30', ease: Expo.ease});
  }
}


// ceo 인사말
function ceo_motion(){
  TweenMax.to($(".ceo_box .img_01"), .4, {delay: 0.5, opacity: '1', width: 980, ease: Circ.easeInOut, onComplete:box});

  function box(){
    TweenMax.to($(".ceo_wrap .color_box"), .4, {opacity: '1', height: 505, ease: Circ.easeInOut, onComplete:object});
    setTimeout(function(){
      $('.color_box p.desc').fadeIn();
    },500);
  }
  function object(){
    TweenMax.to($(".ceo_wrap .color_box img"), .3, {delay: 0.5, opacity: '1', display:'block', ease: Expo.ease});
    TweenMax.to($(".ceo_wrap .ceo_box img.obj"), .3, {delay: 0.7, opacity: '1', display:'block', ease: Expo.ease});
  }
}



// 고객사소개 
function c_motion(){
  TweenMax.to($(".client_title .ef"), .4, {delay: 0.5, opacity: '1', width: 680, ease: Power2.easeIn, onComplete:desc});

  function desc(){
    TweenMax.to($(".client_title p.desc"), .3, {opacity: '1', bottom: 70, ease: Expo.ease});
  }

  // setTimeout(function(){
  //   $('.client_list').css('display','block');
  // },1300);

}

// $.fn.moveIt = function(){
//   var $window = $(window);
//   // var instances = [];
//   var instances = [];
  
//   $(this).each(function(){
//     instances.push(new moveItItem($(this)));
//   });
  
//   window.addEventListener('scroll', function(){
//     var scrollTop = $window.scrollTop();
//     instances.forEach(function(inst){
//       inst.update(scrollTop);
//     });
//   }, {passive: true});
// }

// var moveItItem = function(el){
//   this.el = $(el);
//   this.speed = parseInt(this.el.attr('data-scroll-speed'));
// };

// moveItItem.prototype.update = function(scrollTop){
//   this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
// };

// // Initialization
// $(function(){
//   $('[data-scroll-speed]').moveIt();
// });


// 연구소 소개
function lab(){
  $(document).ready(function(){
    $('.lab_title .ef').css({'display': 'block', 'opacity': 0.1}).animate({'opacity': 1}, 800);
  });


  $(window).scroll(function(){
    var scrolltop = $(window).scrollTop();
    //console.log(scrolltop);
    if (scrolltop > 900) {
      TweenMax.to($(".img_wrap .left"), .4, {opacity: '1', width: 460, ease: Circ.easeInOut});
      TweenMax.to($(".img_wrap .right"), .4, {delay: 0.5, opacity: '1', width: 690, ease: Circ.easeInOut});
      TweenMax.to($(".img_wrap .text_box"), .3, {delay: 1.2, opacity: '1', top: 530, ease: Expo.ease, onComplete:obj});

      function obj(){
        TweenMax.to($(".lab_cont .obj:before"), .4, {left: 0, ease: Expo.ease});
        TweenMax.to($(".lab_cont .obj:after"), .4, {right: 0, ease: Expo.ease});
      }
    }

  });


  
}







// 찾아오시는 길 탭
function tabui(){
  var tab = $('.tab');

  tab.find('li').click(function(){
    if( $(this).hasClass('on') ){      
    }else{
      $(this).parents('.tab').find('li').removeClass('on');
      $(this).addClass('on');
    }

    if( tab.next('.content').is(':visible') == true ){
      var tab_idx = $(this).index();
      $('.content > .cont_wrap').hide();
      $('.content > .cont_wrap').eq(tab_idx).show();
    }
  });
}