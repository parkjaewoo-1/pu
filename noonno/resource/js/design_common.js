var power4 = 'power4.out';
var slow =  'Expo.easeOut'
$(document).ready(function(){

    gnb();
    brandSite();
    locaMenu();
    shareBtn();
    compareBox();
    aboutTab();
    arco();
})
function fixedEl(heaH, _posEl, _fixedEl){
    var headerH = Math.ceil($(heaH).height()),
    posEl = $(_posEl).offset().top,
    fixedEl = $(_fixedEl),
    fixedElH = Math.ceil($(_fixedEl).height()),
    actionTabPos = posEl+fixedElH;

    $(window).scroll(function(){
      var scrollT = $(window).scrollTop();
      if(actionTabPos < scrollT){
        fixedEl.addClass('fixed').css('top',headerH);
      }else{
        fixedEl.removeClass('fixed').css('top','0');
      }

    });
  }

function gnb(){

    $('.gnb > ul > li > a').mouseenter(function(){
      $('.gnb_bottom').addClass('on');
      TweenMax.to( '.depth_02 > li > a', 0.6, {autoAlpha: 1, display:'inline-block', ease:power4, });
	  //$('.depth_02').slideDown('fast');





    });

    $('.gnb_wrap').mouseleave(function(){
		TweenMax.to( '.depth_02 > li > a', 0.1, {autoAlpha: 0, display:'none', ease:power4, onComplete:function(){
			 $('.gnb_bottom').removeClass('on');
		}});
      //$('.depth_02').slideUp('fast');
      //$('.depth_02 > li > a').fadeOut('fast');



    });

}

function brandSite(){
  $('.brand_site > .tit').click(function(){

    $(this).next('.brand_open').show();
  });
   $('.brand_open').mouseleave(function(){

    $(this).stop().hide();
  });
}
function locaMenu(){
    $('.loca_sel').click(function(){
        if( $(this).hasClass('on') == true){
            $(this).removeClass('on');
            $(this).children('.hidden_div').stop().slideUp('fast');
        }else{
            $(this).children('.hidden_div').stop().slideDown('fast');
            $(this).addClass('on');
        }


    })

    $('.loca_sel').mouseleave(function(){

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
function compareBox(){
    var inputEl = $(".prd input:checkbox[class='prdchkB']"),
    ChkNum = 0, _img = [], _tit = [], checked = [],
    compListInnerHTML = "<div class='copy'>"+$('.compare_box .list > div').html()+"</div>",
    compList = $('.compare_box .list > div'),
    compImgSort = $('.compare_box .list > div .img img'),
    compTitSort = $('.compare_box .list > div .desc'),
    compareBox = $('.compare_box'),
    compareBoxTit = $('.compare_box > .tit');

    inputEl.on('change', function(e){
        if($(this).is(':checked') == true){ // 체크
            ChkNum += 1;
            _img.push($(this).parents('.prd').find('img').attr('src'));
            _tit.push($(this).next('label').find('.title').text());
            checked.push($(this));
            if(ChkNum > 0){
                compareBoxTit.addClass('on');
                compareBox.addClass('on');
                TweenMax.to(compareBox, 0.6, {bottom: '0px', ease:power4});
            }
            if(ChkNum > 3){
                ChkNum -= 1;
                alert('비교하기는 3개 제품까지만 가능합니다.');
                _img.splice(3,1);
                _tit.splice(3,1);
                checked.splice(3,1);
                $(this).prop("checked", false);
            }

            for(var i = 0; i < ChkNum; i++){
                compImgSort.eq(i).attr('src',_img[i]);
                compTitSort.eq(i).text(_tit[i]);
                compList.eq(i).addClass('on');
            }
        }else if($(this).is(':checked') == false){ // 체크해제
            ChkNum -= 1;
            var comTit = $(this).next('label').find('.title').text(),
            comImg = $(this).prev('.thumb').find('img').attr('src'),
            idxofNum = _tit.indexOf(comTit);

            _tit.splice($.inArray(comTit, _tit),1);
            _img.splice($.inArray(comImg, _img),1);
            checked.splice(idxofNum,1);
            // console.log(idxofNum);
            compList.eq(idxofNum).detach();
            $('.compare_box .list').append(compListInnerHTML);
            compList = $('.compare_box .list > div');
            compImgSort = $('.compare_box .list > div .img img');
            compTitSort = $('.compare_box .list > div .desc');
            if(ChkNum > 0){
                compareBoxTit.addClass('on');
                compareBox.addClass('on');
                TweenMax.to(compareBox, 0.6, {bottom: '0px', ease:power4});
            }
            if(ChkNum <= 0){
                compareBoxTit.removeClass('on');
                compareBox.removeClass('on');
                TweenMax.to(compareBox, 0.6, {bottom: '-406px', ease:power4});
            }
        }
    });
    $(document).on('click','.compare_box .desc .blind',function(){
        ChkNum -= 1;
        var _delClTit = $(this).parent().siblings('.desc').text();
        var blindIdx = _tit.indexOf(_delClTit);

        checked[blindIdx].prop('checked',false);
        compList.eq(blindIdx).detach();
        _tit.splice(blindIdx,1);
        _img.splice(blindIdx,1);
        checked.splice(blindIdx,1);

        $('.compare_box .list').append(compListInnerHTML);
        compList = $('.compare_box .list > div');
        compImgSort = $('.compare_box .list > div .img img');
        compTitSort = $('.compare_box .list > div .desc');
        if(ChkNum <= 0){
            compareBoxTit.removeClass('on');
            compareBox.removeClass('on');
            TweenMax.to(compareBox, 0.6, {bottom: '-406px', ease:power4});
        }
    });


     $('.compare_box > .tit').click(function(){
        var thP = $(this).parent('.compare_box');
        if( thP.hasClass('on') == true){
            $(this).removeClass('on');
            thP.removeClass('on');
            TweenMax.to(thP, 0.6, {bottom: '-350px', ease:power4});
            $('.tab_cont').removeClass('on')
        }else{
            $(this).addClass('on');
            thP.addClass('on');
            TweenMax.to(thP, 0.6, {bottom: '0px', ease:power4});
            $('.tab_cont').addClass('on');
        }

     });
}
function aboutTab(){

    $('.edu_service .list_tab li').click(function(){
        var tIdx = $(this).index();

        $('.edu_service .list_tab li.on').removeClass('on');
        $(this).addClass('on');
         $('.edu_service .list_content .tab_cont.on').removeClass('on');
        $('.edu_service .list_content .tab_cont').eq(tIdx).addClass('on');

    });
}


//레이어팝업

function layerPopOpen(obj){// 레이어팝업 열기, obj : 해당팝업 id


    var thisPop = $('#'+obj).find('.layer_pop');
    var winW = $(window).width();
    var winH = $(window).height();

    //dimOn();
    if($('#'+obj).length >= 1){
        $('#'+obj).addClass('open');
        $('html, body').css('overflow','hidden');


    }


}

function layerPopClose(obj){// 레이어팝업 닫기, obj : 해당팝업 id
    console.log('close');
    $('#'+obj).removeClass('open');
    $('html, body').css('overflow','auto');
    $('body').removeAttr('style');



}
function arco(){
    $('.arco_list ul li .tit').click(function(){
        if( $(this).parent('li').hasClass('on') == true    ){
            $(this).next('.hidden').slideUp();
            $(this).parent('li').removeClass('on');
        }else{
            $(this).next('.hidden').slideDown();
            $(this).parent('li').addClass('on');
        }
    });
}
