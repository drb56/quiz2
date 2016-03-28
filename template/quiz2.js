(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.
	$(".timeout").hide(0);
	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$submit       = $('.submit');
	$newbutton = $('#newbutton');
	$this = $(this);
	var data = $.getJSON("http://www.mattbowytz.com/simple_api.json",{data: "quizData"}, function( json ) {
  				console.log(json);
	});
//	var keys = JSON.parse(data.responseText);
//	var stuff = keys.data;

	$mouseover.mouseover('mouse-over', function() {
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height());
	});

	$click.click('click', function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$submit.submit('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append("<h2>Congratulations! You've entered some text!</h2>");
		}
	});
	
	$newbutton.click('click', function(){
		for(var i=0; i<data.length; i++)
			{
				$(this).html(data[i]);
			}		 
	});

	$(".timeout").fadeIn('ready', function() {
		setTimeout(function(){
			$('.timeout').fadeIn('slow');
		}, 1000);
	});

})(jQuery);