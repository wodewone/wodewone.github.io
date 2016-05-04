//var dpr2 = '<meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">';
//var dpr3 = '<meta name="viewport" content="initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no">';
//if(!!window.devicePixelRatio && window.devicePixelRatio == 2){
//    $('[name="viewport"]').remove();
//    $('head').prepend(dpr2)
//}
//if(!!window.devicePixelRatio && window.devicePixelRatio == 3){
//    $('[name="viewport"]').remove();
//    $('head').prepend(dpr3)
//}
$(function() {
    $(".swiper-container").swiper({autoplay: 5000});
    $('.input-date').calendar();
});