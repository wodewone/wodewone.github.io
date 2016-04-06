/* global NexT: true */

$(document).ready(function () {

  $(document).trigger('bootstrap:before');

  NexT.utils.isMobile() && window.FastClick.attach(document.body);

  NexT.utils.lazyLoadPostsImages();

  NexT.utils.registerBackToTop();

  $('.site-nav-toggle button').on('click', function () {
    var $siteNav = $('.site-nav');
    var ON_CLASS_NAME = 'site-nav-on';
    var isSiteNavOn = $siteNav.hasClass(ON_CLASS_NAME);
    var animateAction = isSiteNavOn ? 'slideUp' : 'slideDown';
    var animateCallback = isSiteNavOn ? 'removeClass' : 'addClass';

    $siteNav.stop()[animateAction]('fast', function () {
      $siteNav[animateCallback](ON_CLASS_NAME);
    });
  });


  CONFIG.fancybox && NexT.utils.wrapImageWithFancyBox();
  NexT.utils.embeddedVideoTransformer();
  NexT.utils.addActiveClassToMenuItem();


  // Define Motion Sequence.
  NexT.motion.integrator
    .add(NexT.motion.middleWares.logo)
    .add(NexT.motion.middleWares.menu)
    .add(NexT.motion.middleWares.postList)
    .add(NexT.motion.middleWares.sidebar);

  $(document).trigger('motion:before');

  // Bootstrap Motion.
  CONFIG.motion && NexT.motion.integrator.bootstrap();

  $(document).trigger('bootstrap:after');

  /*
   * animate init and action
   */
  var $slideObj = $('#sidebar');
  var $animateBtn = $('#enableAnimate');
  //if(!animateFlag){
  //  $animateBtn.attr("checked", false);
  //  $slideObj.addClass('stop');
  //}
  $animateBtn.on('click',function(){
    var defaultPoint = [];
    var _slideCss = $slideObj.css("background-position"); //这里是对IE的修复，IE中无法获得background-position， //只能获得background-position-x和background-position-y
    if (typeof (_slideCss) === "undefined") {
      defaultPoint[0] = $slideObj.css("background-position-x");
      defaultPoint[1] = $slideObj.css("background-position-y");
    } else {
      defaultPoint = _slideCss.split(" ");
    }

    if($animateBtn.is(':checked')){
      $slideObj.removeClass('stop');
      $slideObj.css("background-position",defaultPoint[0]?defaultPoint[0]:100% + '' +defaultPoint[1]?defaultPoint[1]:0);
      //$.cookie(animateCookie,true);
    }else{
      $slideObj.addClass('stop');
      $slideObj.css("background-position",defaultPoint[0]?defaultPoint[0]:100% + '' +defaultPoint[1]?defaultPoint[1]:0);
      //$.cookie(animateCookie,'');
    }
  });

});
