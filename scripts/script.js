/* Author:

*/
$(document).ready(function($) {
	$("li:last-child").addClass("last-child");
	
	$('#scislides').slides({
		play:7000,
		effect: 'fade',
		fadeSpeed: 350,
		generateNextPrev: false,
		generatePagination: false
	});
	
	$('#scislides_2').slides({
		play:9000,
		effect: 'fade',
		fadeSpeed: 350,
		generateNextPrev: false,
		generatePagination: false
	});
	
	$(".btn-slide").click(function(){
		$(this).next(".panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
	
	$(".btn-slide_2").click(function(){
		$(this).next(".panel_2").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});	
	
	
});




