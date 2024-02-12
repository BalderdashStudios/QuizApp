$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	
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
	
	
});
