$(document).ready(function(){
  $('.header_barText').hide();
  $('#btn-menu').click(function(){
  $('.menu').toggleClass('close');
  $('.header_barText').slideToggle();
  });
});
