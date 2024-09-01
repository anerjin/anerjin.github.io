/***********************************************************
 * widget Ui
 ************************************************************/
$(function() {
	deskLogin();
	clock();
	
	setInterval('clock()', 1000);
	
});



/***********************************************************
 * login Ui - 전역변수
 ************************************************************/
var loadPop = "#loadPop";


/***********************************************************
 * login Ui - deskLogin
 ************************************************************/
function deskLogin() {


	var loadPopBtn = "#lockWrap .header .tools button"
	
	$(loadPopBtn).click(function(){
		
		var loadPopName = $(this).attr("data-pop");
		var widget = "#lockWrap .container .widget";
		var loadPopClose = "[data-ui='loadPopClose']";
		
		if($(widget).hasClass("hide")){
			$(widget).removeClass("hide").addClass("show");
			$('#'+loadPopName).addClass("hide").delay(280).queue(function(){
				$(this).remove();
			})
		}else{
			$(widget).removeClass("show").addClass("hide");
			showPop()
		}
		
		// showPop
		function showPop() {
			$(loadPop).append( "<div id='"+loadPopName+"' class='loginWrap'></div>" );
			$('#'+loadPopName).load('./ui_deskboard/popup/'+loadPopName+'.html');
		}

		// loadPopClose
		$("#lockWrap").on("click", loadPopClose, function() {
			$(this).closest('.loginWrap').addClass("hide").delay(280).queue(function(){
				$(this).remove();
			})
			$(widget).removeClass("hide").addClass("show");
		});

	
	});
	

}



/***********************************************************
 * login Ui - clock
 ************************************************************/
function clock() {
	
	// Create two variable with the names of the months and days in an array
	//var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	//var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	var monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
	var dayNames = ["일", "월", "화", "수", "목", "금", "토"]
	
	// Create a newDate() object
	var newDate = new Date();
	// Extract the current date from Date object
	newDate.setDate(newDate.getDate());
	// Output the day, date, month and year
	//$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	// $('#date').html(newDate.getFullYear() + '년 ' + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + '일 ' + ' (' + dayNames[newDate.getDay()] + ') 요일');
	$('#date').html(monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + '일 ' +  dayNames[newDate.getDay()] + '요일');

    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    //Set the AM or PM time
    if (hours >= 12) {
        meridiem = " PM";
    } else {
        meridiem = " AM";
    }

    //convert hours to 12 hour format and put 0 in front
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12;
    }

    //Put 0 in front of single digit minutes and seconds
    if (minutes < 10) {
        minutes = "0" + minutes;
    } else {
        minutes = minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    } else {
        seconds = seconds;
    }
    document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds + '<span>'+ meridiem +'</span>');			

}
