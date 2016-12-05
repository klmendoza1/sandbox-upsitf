$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      //alert(target.offset().top);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top + 1
        }, 500);
        return false;
      }
    }
  });
});
