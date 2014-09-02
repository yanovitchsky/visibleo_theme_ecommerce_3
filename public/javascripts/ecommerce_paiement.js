
$('#pay').on('click', function(){
	payment_url =  $('#select-paiement').val();
	window.location = payment_url;
});