$(document).ready(function(){
	console.log("script loaded");
	$("#nav-toggle").click(function(){
		$("#navigation").slideToggle();
	});


	// just to be sure...
	// remove the style attribute that was added
	// through the code above on resize
	$(window).resize(function(){
		if(window.screen.width > 767){
			$("#navigation").removeAttr("style");
		}
	})
});