$(function () {

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

});
