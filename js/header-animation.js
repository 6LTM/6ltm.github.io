$(document).ready(function(){
	$("header h3").css({"opacity": 0});
	$("header h1").css({"opacity": 0}).animate({"opacity": 1},{
		duration: 1000,
		done: function(){
			$("header h3").animate({"opacity": 1},1000);
		}
	});
})	