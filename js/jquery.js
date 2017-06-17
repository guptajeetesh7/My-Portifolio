$(document).ready(function(){

	$("#animate-nav").fadeIn(2000);
	$("#animate-home").fadeIn(2000);

var val = 0;

var interval = setInterval(function(){

	val = val + 1;
	$("#html").progressbar({value : 50});
	  $("#html > div").css({ 'background': '#2196F3' });;

},50);

  $("#html").css({ 'background-color': 'white' });
  

	

});