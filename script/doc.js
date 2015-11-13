$(function () {

  // Handles all doc drawers

  $('.more').hide();

  $('.open').show();

  $('.showmore').click(function () {
    var divmore = $(this).parent().children('.more');
    var arrow   = $(this).parent().children('.arrow');
    // arrow.toggleClass('arrow-right');
    // arrow.toggleClass('arrow-bottom');
    arrow.toggleClass('rotate');
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
