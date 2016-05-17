/*----------------loading screen disappears---------*/


$(window).load(function(){
    $(".loader").fadeOut(4000);

});



/*---------hide and showing of navbar with scroll up and down-----*/

$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < 900) {
        $(".sidebar em").text("Up"); /* optional for demo */
      $(".header").show("fast");
    }
    else if (currentTop < this.previousTop) {
          $(".sidebar em").text("Up"); /* optional for demo */
        $(".header").show("fast");
      }
    else  {
        $(".sidebar em").text("Down");
        $(".header").hide("fast");
    }
      this.previousTop = currentTop;
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

    });

});



/*-------------Parallax--------------*/



$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.cover').css({
      'transform' : 'translate(0px, '+ wScroll /8 +'%)'
    });

    $('.cover1').css({
      'transform' : 'translate(0px, -'+ wScroll /15 +'%)'
    });
    

});
