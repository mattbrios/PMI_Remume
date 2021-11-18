$(function () {
  $('#toup').hide();
  $('#toup').css('opacity', '1');

  
  $('#toup').click( function () {
    window.scrollTo(0, 0);
  });

  $(document).scroll( function () {
    let y = $(this).scrollTop();
    console.log(y)
    if ( y > 2200 ) {
      $('#toup').fadeIn();
    }
    else {
      $('#toup').fadeOut();
    }
  });
});