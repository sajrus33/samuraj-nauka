const $menuOptions = $('.menu>ul>li');
// function changeLanguage(){
//     if(choosenTower==$(this).attr("id")){
//         choosenTower=null;
//     }else {choosenTower=$(this).attr("id");
// }}
// $menuOptions.mouseover(changeLanguage);




// $(document).on('scroll',function(){
//    const scrollValue = $(this).scrollTop();
//    //console.log(scrollValue);
   
//    // const distance1 = $testLabel1.offset().top;
//    // const $labelHeight = $testLabel1.outerHeight();
 
   
// })

//Get all eng tests labels
const heightPer = 20;
let firstLabeltoShow = 3;
let labelsAmount = $('.test').length;

const $testsLabels = [];

for(var i=firstLabeltoShow; i<=labelsAmount; i++){
   $testsLabels.push($('.test'+i));
   console.log('.test'+i,$testsLabels);
}
//on scroll, show tests labels
$(document).ready(function(){
   $(window).scroll(function(){
      for(var i=0; i<$testsLabels.length; i++){
         if(($(this).scrollTop() + $(this).height())>($testsLabels[i].offset().top) + ($testsLabels[i].height()/heightPer)){
            $testsLabels[i].css({"transform":'translateX(0%)'}); 
         }else{
            $testsLabels[i].css({"transform":'translateX(-100%)'}); 
         }
         if(($(this).scrollTop() + $(this).height())<($testsLabels[i].offset().top) + ($testsLabels[i].height() / heightPer)){
            $testsLabels[i].css({"transform":'translateX(-100%)'}); 
         }
      }
   })
})