$(function(){
	
	var note = $('#note'),
        note2 = $('#note2'),
		ts = new Date(2012, 0, 1);

	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*40*500;
	}

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){

			var message = "";

			message += '<span class="wrap-block-timer">' + '<span class="result-day">' + days + '</span>' + " дня" + '</span>';
			message += '<span class="wrap-block-timer">' + '<span class="result-hour">' + hours + '</span>' + " часов" + '</span>';
			message += '<span class="wrap-block-timer">' + '<span class="result-minute">' + minutes + '</span>' + " минут" + '</span>';
			message += '<span class="wrap-block-timer">' + '<span class="result-second">' + seconds + '</span>' + " секунд" + '</span>';


			note.html(message);
            note2.html(message);
		}
	});
	
});