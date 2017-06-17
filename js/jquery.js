$(document).ready(function(){

	$("#animate-nav").fadeIn(2000);
	$("#animate-home").fadeIn(2000);

var html =0; var css = 0;


var interval_html = setInterval(function(){


	html = html + 1;

	$("#html")
    .progressbar({ value: html })
    .children('.ui-progressbar-value')
    .html(html + '%')
    .css("display", "block")
    .css({ 'background-color': '#2196F3' });

    $("#html").css({ 'background-color': 'white' });


	if(html==85){
		clearInterval(interval_html);
	}
	  

},20);



var interval_css = setInterval(function(){


	css = css + 1;

	$("#css")
    .progressbar({ value: html })
    .children('.ui-progressbar-value')
    .html(css + '%')
    .css("display", "block")
    .css({ 'background-color': '#673AB7' });

    $("#html").css({ 'background-color': 'white' });


	if(css==65){
		clearInterval(interval_css);
	}
	  

},20);
  
  

	

});