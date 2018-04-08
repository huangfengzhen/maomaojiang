$().ready(function(){
  $(".joblist li").click(function(){
    $(this).addClass("visited").siblings().removeClass("visited");
  })
})