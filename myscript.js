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
	
	$("#Q1Y").click(function(){
		$("#Q2").toggle();
	});
	
	$("#Q1N").click(function(){
		$("#Q1F").toggle();
	});
	
	
	$("#Q2Y").click(function(){
		$("#Q3").toggle();
	});
	
	$("#Q2N").click(function(){
		$("#Q2F").toggle();
	});
	
	$("#Q3Y").click(function(){
		$("#Q4").toggle();
	});
	
	$("#Q3N").click(function(){
		$("#Q3F").toggle();
	});
	
	$("#Q3N1").click(function(){
		$("#Q3F").toggle();
	});
	
	$("#Q4Y").click(function(){
		$("#Q5").toggle();
	});
	
	$("#Q4N").click(function(){
		$("#Q4F").toggle();
	});
	
	$("#Q5Y").click(function(){
		$("#Finish").toggle();
	});
	
	$("#Q5N").click(function(){
		$("#Q5F").toggle();
	});
	
	
});
