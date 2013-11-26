(function(){
	$('#contact').submit(function(e) {
		e.preventDefault();
		var data = {
			"name": $('#contact_name').val(),
			"email": $('#contact_email').val(),
			"message": $('#contact_message').val()
		};
		$.post( "contact.php", function( data ) {
			console.log('worked!');
		});
	});
}());