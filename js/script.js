$(".bingo-card__item").on('click', function() {
	$(this).toggleClass('active');
});

$('.clear-button').on('click', function(){
	$('.bingo-card__item').removeClass('active');
});

$.getJSON( "https://api.morecis.co/v1/bingo/items", function( data ) {
  var items = [];
  $.each( data.pool , function( key, val ) {
    $( "#" + key ).text(val);
  });
});
