$(function () {
$(window).scroll(function(){
   if($(window).scrollTop()>148)
   {
    $(".con_Category").css("position","fixed");
   }
    else
   {
       $(".con_Category").css("position","static");
   }
});

})