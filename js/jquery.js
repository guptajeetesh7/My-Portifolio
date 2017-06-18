
$(window).on('load', function () {
    
    $('.preloader').fadeOut();  
      



		


var html =0; var css = 0; var bootstrap =0 ; var jq=0; var angular = 0 ; var php = 0;


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
  


var interval_bootstrap = setInterval(function(){


	bootstrap = bootstrap + 1;

	$("#bootstrap")
    .progressbar({ value: bootstrap})
    .children('.ui-progressbar-value')
    .html(bootstrap + '%')
    .css("display", "block")
    .css({ 'background-color': '#009688' });

    $("#jquery").css({ 'background-color': 'white' });


	if(bootstrap==78){
		clearInterval(interval_bootstrap);
	}
	  

},20);



var interval_jq = setInterval(function(){


	jq =jq + 1;
	

	$("#jq")
    .progressbar({ value: jq})
    .children('.ui-progressbar-value')
    .html(jq + '%')
    .css("display", "block")
    .css({ 'background-color': '#E65100' });

    $("#jquery").css({ 'background-color': 'white' });


	if(jq==72){
		clearInterval(interval_jq);
	}
	  

},20);


var interval_angular = setInterval(function(){


	angular =angular + 1;
	

	$("#angular")
    .progressbar({ value: angular})
    .children('.ui-progressbar-value')
    .html(angular + '%')
    .css("display", "block")
    .css({ 'background-color': '#CDDC39' });

    $("#jquery").css({ 'background-color': 'white' });


	if(angular==83){
		clearInterval(interval_angular);
	}
	  

},20);


   

var interval_php = setInterval(function(){


	php =php + 1;
	

	$("#php")
    .progressbar({ value: php})
    .children('.ui-progressbar-value')
    .html(php + '%')
    .css("display", "block")
    .css({ 'background-color': '#9E9E9E' });

    $("#jquery").css({ 'background-color': 'white' });


	if(php==85){
		clearInterval(interval_php);
	}
	  

},20);

  

	

});