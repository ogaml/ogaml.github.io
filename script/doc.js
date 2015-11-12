$(function () {

  // Handles all doc drawers

  $('.more').hide();

  $('.open').show();

  $('.showmore').click(function () {
    var divmore = $(this).parent().children('.more');
    if(divmore.is(':hidden')) {
      divmore.slideDown("fast");
    }
    else {
      divmore.slideUp("fast");
    }
  });

  // Handles menu for small screens

  $('#nav-trigger').click(function () {
    $('aside').toggleClass('nav-visible');
    $(this).toggleClass('nav-visible');
  });

});
