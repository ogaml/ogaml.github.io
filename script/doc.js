$(function () {

  //////////////////////////
  // Handles all doc drawers
  //////////////////////////

  $('.more').hide();

  $('.open').show();

  $('.showmore').click(function () {
    var divmore = $(this).parent().children('.more');
    var arrow   = $(this).parent().children('.arrow');
    arrow.toggleClass('rotate');
    if(divmore.is(':hidden')) {
      divmore.slideDown("fast");
    }
    else {
      divmore.slideUp("fast");
    }
  });

  ///////////////////////
  // Collapsable nav tree
  ///////////////////////

  $('aside ul').hide();
  $('#main-nav').show();

  // We remove the arrow when the li has no ul inside
  $('aside li:not(:has(ul ul))').children('.arrow').hide();

  $('.shownav').click(function () {
    var ul    = $(this).parent().children('ul');
    var arrow = $(this);
    arrow.toggleClass('rotate');
    if(ul.is(':hidden')) {
      ul.slideDown("fast");
    }
    else {
      ul.slideUp("fast");
    }
  });

  // Show all button
  $('.showall:not(.hideall)').click(function () {
    $('.shownav:not(.rotate)').trigger('click');
    $(this).text('Hide all');
    $(this).addClass('hideall');
  });

  // Hide all button
  $('.showall.hideall').click(function () {
    $('.shownav.rotate').trigger('click');
    $(this).text('Show all');
    $(this).removeClass('hideall');
  });

  /////////////////////////////////
  // Handles menu for small screens
  /////////////////////////////////

  $('#nav-trigger').click(function () {
    $('aside').toggleClass('nav-visible');
    $(this).toggleClass('nav-visible');
  });

});
