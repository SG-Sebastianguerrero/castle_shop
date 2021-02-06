
$('.header_barText').show();
var mediaqueryList = window.matchMedia("(min-width: 768px)");

if(mediaqueryList.matches) {
  $(document).ready( function(){
  $('.header_barText').show();
  });
  }

if(!mediaqueryList.matches){
 $(document).ready( function(){
  $('.header_barText').hide();
  $('#btn-menu').click(function(){
  $('.menu').toggleClass('close');
  $('.header_barText').slideToggle();
  });
});
}


// var mediaqueryList = window.matchMedia("(min-width: 768px)");
// mediaqueryList.addListener( function(EventoMediaQueryList) {
//  if(EventoMediaQueryList.matches) {
//    $('.header_barText').show();
//  }
//  if(!EventoMediaQueryList.matches){
//  $('.header_barText').hide();
//  $('#btn-menu').click(function(){
//  $('.menu').toggleClass('close');
//  $('.header_barText').slideToggle();
//  });}
});
