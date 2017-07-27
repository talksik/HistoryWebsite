/*----------------loading screen disappears---------*/


$(window).load(function(){
    $(".loader").fadeOut(3000);

});



/*---------hide and showing of navbar with scroll up and down-----*/

$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < 900) {
      $(".header").fadeIn("medium");
    }
    else if (currentTop < this.previousTop) {
        $(".header").fadeIn("medium");
      }
    else  {
        $(".header").fadeOut("medium");
    }
      this.previousTop = currentTop;
});



/*-------------Parallax--------------*/

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.cover').css({
      'transform' : 'translate(0px, '+ wScroll /16 +'%)'
    });

    $('.cover1').css({
      'transform' : 'translate(0px, -'+ wScroll /15 +'%)'
    });



    $('.music1').css({
      'transform' : 'translate(0px, '+ wScroll /5 +'%)'
    });



});


/*-----------Smooth Scroll from clicking on link in navbar-----*/

$(function(){
    $('a[href^="#"]').click(function(e){
          var target = $(this).attr('href');
          var strip = target.slice(1);
          var anchor = $("a[name='"+  strip  +"']");

          e.preventDefault();

          $('html, body').animate({

            scrollTop: anchor.offset().top


          }, 'slow');
          return false;
    });

});
