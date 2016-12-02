var animateCookie = 'getAnimateFlag';
var animateFlag = $.cookie(animateCookie);
$(function(){
    /*
     * go top
     */
    var gotop = $('#gotop');
    gotop.on('click',function(){
        $('body').animate({scrollTop:0},300);
    });
    $(window).scroll(function(){
        $(window).scrollTop() > 200 ? gotop.addClass('active') : gotop.removeClass('active');
    });

    /*
     * fixed menu action
     */
    $('.fix-menu .menu-btn').on('click',function(e){
        e.stopPropagation();
        $('.fix-menu').toggleClass('active');
    });
    $('.fix-menu .menu-btn-theme').on('click',function(e){
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('body').addClass('theme-dark')
        }else{
            $(this).removeClass('active');
            $('body').removeClass('theme-dark');
        }
    });

    $(document).on('click',function(){$('.fix-menu').removeClass('active');});

    //加载完成后隐藏 loading 层
    $('.loading').fadeOut();
    /*
     * animate init and action
     */
    var $slideObj = $('.slide-box');
    var $animateBtn = $('#enableAnimate');
    if(!animateFlag){
        $animateBtn.attr("checked", false);
        $slideObj.addClass('stop');
    }
    $animateBtn.on('click',function(){
        if($animateBtn.is(':checked')){
            $slideObj.removeClass('stop');
            $.cookie(animateCookie,true);
        }else{
            $slideObj.addClass('stop');
            $.cookie(animateCookie,'');
        }
    });

    /*
     * music setting
     */
    var $musicBtn = $('.menu-btn-music');
    var $music = $('#bg-music');
    $musicBtn.on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $music[0].pause();
        }else{
            $(this).addClass('active');
            $music[0].play();
        }
    });
});

//    function resizeLayoutHeight(){
//        $('.layout-inner').height($(window).height()-46);
//        $(window).resize(function(){
//            $('.layout-inner').height($(window).height()-40);
//        });
//    }