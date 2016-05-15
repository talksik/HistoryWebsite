$(window).scroll(
    {
        previousTop: 900
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".sidebar em").text("Up"); /* optional for demo */
      $(".header").show();
    }
    else  {
        $(".sidebar em").text("Down");
        $(".header").hide();
    }
      this.previousTop = currentTop;
});
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
