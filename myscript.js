$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	})
	
	$("#p1").click(function() {
		$(".disappear").toggle();
	});
	
	$("#scaler").mouseenter(function() { 
		$(this).css("font-size", "250%");
	});
	
	$("#scaler").mouseleave(function() { 
		$(this).css("font-size", "200%");
	});
	
	$(".correct").click(function() { 
		$(this).parent().next().next().fadeToggle();
	});
	
	$(".incorrect").click(function() { 
		$(this).parent().next().fadeToggle();
	});
});
