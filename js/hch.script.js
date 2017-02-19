var $ = jQuery.noConflict();

$(document).ready(function(){
	$('body').fadeIn("10000");

	$("#lnk_about_me").click(function(e){
		e.preventDefault();

		$.ajax({
			url: "./about_me.php",
			success: function(d){mainBodyAppend(d)}
		});
	});

	$("#lnk_homoeopathy_for_you").click(function(e){
		e.preventDefault()
		
		$.ajax({
			url: "./homoeopathyforyou.php",
			success: function(d){mainBodyAppend(d)}
		});
	});

	$("#lnk_contact_me").click(function(e){
		e.preventDefault()
		
		$.ajax({
			url: "./contact_me.php",
			success: function(d){mainBodyAppend(d)}
		});
	});

	$('#lnk_about_me').trigger('click');

	function mainBodyAppend(d){
		$('#main-body').empty();
		$('#main-body').append(d).slideDown('fast');
	}
});