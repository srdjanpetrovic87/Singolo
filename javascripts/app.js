$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $(document).on("scroll", onScroll);
    //smoothscroll
    $('.navbar-nav a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).parent().removeClass('active');
      })

      $(this).parent().addClass('active');
    
      var target = this.hash;
      var menu = target;

      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top-95
      }, 750, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
    });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.navbar-nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top-95 <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos) {
        $('.navbar-nav li').removeClass("active");
        currLink.parent().addClass("active");
      }
      else{
        currLink.parent().removeClass("active");
      }
  });
}
