//smooth scrolling up and down!
//source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          //the top - # sets it that # of pixels above div (for nav)
          scrollTop: target.offset().top-50
        }, 700);
        return false;
      }
    }
  });
});
//end smooth scrolling code