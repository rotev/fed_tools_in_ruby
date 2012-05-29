$(document).ready(function(){
	$(".slide-id").each(function(){
		$(this).parents(".slide-wrapper").addClass($(this).data("class"));
	});
});