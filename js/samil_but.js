  $(function () { //  jquery시작
     
     $('.small_but ul li').click(function(){
      $('.small_but ul li').removeClass('on');   
       $(this).addClass("on");
    
        $('.menu_bar>div').css({
            height:"0"
        });
         $('.menu_bar>div').eq($(this).index()).css({
            height:"300px"
        }).css({
            height:"auto"
        });;
         
         return false;
         
     })
         
    
     
  }); //jquery 종료