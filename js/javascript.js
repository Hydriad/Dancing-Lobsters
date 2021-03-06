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
          scrollTop: target.offset().top-0
        }, 700);
        return false;
      }
    }
  });

  // TABLE SETTING - Change content of utensil description (right side)
  $("#table-setting-container a").click(function() {
    //$(this).classList.add("object-selected");
    $("#table-setting-container a").attr("class", "");
    $(this).attr("class", "object-selected");

    var idDivContent = "#tabledesc-"+$(this).attr("id");
    
    $(".tabledesc").css("display", "none");
    $( idDivContent ).css("display", "block");

    $( idDivContent ).css("opacity", 0);
    $( idDivContent ).animate({
    opacity: 1
    }, 400);
  });

  // DISHES - Change content of larger dish (right side)
  $(".dishthumb").click(function() {
    var idDivContent = "#dishlarge-"+$(this).attr("id");
    
    $(".dishlarge").css("display", "none");
    $( idDivContent ).css("display", "block");

    $( idDivContent ).css("opacity", 0);
    $( idDivContent ).animate({
    opacity: 1
    }, 400);
  });

  // Hide claws when scroll down
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) { //use `this`, not `document`
      $('#lobster-claws').css('display', 'none');
    }
    else {
      $('#lobster-claws').css('display', 'block');
    }
  });
  
});
//end smooth scrolling code


