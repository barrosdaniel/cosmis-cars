$('#submitQueryButton').click(function(event) {
    event.preventDefault();
    
    const customerName = $('#interestName').val();
    const queryAlert = $('#queryAlert');
    queryAlert.html('Thanks, ' + customerName + '. We will be in contact shortly.');
    queryAlert.removeClass('d-none');
    
    $('#register-interest-form').addClass('d-none');
});