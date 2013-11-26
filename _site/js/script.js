(function(){
	$('#contact').submit(function(e) {
		e.preventDefault();
		var data = {
			"name": $('#contact_name').val(),
			"email": $('#contact_email').val(),
			"message": $('#contact_message').val()
		};
		console.log(data);
		$.ajax({
			method: "POST",
			url: "contact.php",
			data: data,
			success: function(response) {
				$('.input').toggle().html(response);
			}
		});
	});
}());