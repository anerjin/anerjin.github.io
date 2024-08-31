/***********************************************************
 * widget Ui
 ************************************************************/
$(document).ready(function() {
    widgetUi();
	widgetSetting();
});

function widgetUi() {

	var widegtOnf = "[data-ui='widegtOnf']";
	var widgetRemove = "[data-ui='widgetRemove']";
	var widgetTheme = "[data-ui='widgetTheme']";
	var widegtFold = "[data-ui='widegtFold']";
	var widegtSetOnf = "[data-ui='widegtSetOnf']";
	var widegtSetClos = "[data-ui='widegtSetClos']";

	// widegtOnf
	$(widegtOnf).click(function() {
		$(this).toggleClass("active");
		if($("#wrap").hasClass("widgetOpen")){
			$("#wrap").removeAttr("class")
		} else {
			$("#wrap").addClass("widgetOpen");
		}
	});

	// winSize removeClass widgetOpen
	$(window).resize(function() {
		var windowWidth = $( window ).width();
		if(windowWidth < 1280) {
			$("#wrap").removeClass("widgetOpen");
		}
	});

	// widegtOnf
	var widget = "#widget .widgetBox .widgetBoxBody .widget"

	$(widegtFold).click(function() {

		if($(widget).hasClass("fold")){
			$(widget).removeClass("fold");
			$(this).removeClass("mti-unfold-more-horizontal").addClass("mti-unfold-less-horizontal");
		}else {
			$(widget).addClass("fold");
			$(this).removeClass("mti-unfold-less-horizontal").addClass("mti-unfold-more-horizontal");
		}

	})

	// widegtSetOnf
	$(widegtSetOnf).click(function() {
		if ($("#wrap").hasClass("widgetSetting")){
			$("#wrap").removeClass("widgetSetting");
			$(widegtSetOnf).removeClass("mti-close-circle").addClass("mti-settings");
		}else{
			$("#wrap").addClass("widgetSetting");
			$(widegtSetOnf).removeClass("mti-settings").addClass("mti-close-circle");
		}
	});

	// widegtSetClos
	$(widegtSetClos).click(function() {
		if ($("#wrap").hasClass("widgetSetting")){
			$("#wrap").removeClass("widgetSetting");
			$(widegtSetOnf).removeClass("mti-close-circle").addClass("mti-settings");
		}
	});

	// widegt Remove
	$(widgetRemove).click(function() {
		$(this).parents(".widget").slideUp(200).delay(300).queue(function(){
		 	$(this).remove();
		});
		$(this).dequeue();
	});

	// sortable
    $( "#widget .widgetBox .widgetBoxBody .mCSB_container" ).sortable({
		handle: ".widgetHeader .tools span.mti-menu",
		//axis:"y",
		containment: 'parent',
		tolerance: "pointer",
		placeholder: 'placeholder',
		start: function(e, ui ){
					 ui.placeholder.height(ui.helper.outerHeight());
				 },
	}).disableSelection();


	setInterval('clock()', 1000);

	// theme
	$(widgetTheme).on("click",function(){
		if($(this).is(":checked")) {
			$('#widget').removeClass("themeDark").addClass("themeGlass");
		} else {
			$('#widget').removeClass("themeGlass").addClass("themeDark");
		}
	});

    widgetHeader(); // 1. top init
    // widgetEvent(); // 2. widgetEvent init
	widgetPlus (); // 3. widgetEvent init
}

function widgetHeader() {


	var widgetFold = "[data-ui='widgetFold']";

	$(widgetFold).on("click",function(){
		$(this).toggleClass("active").parents(".widget").toggleClass("fold");
	});



}

/***********************************************************
 * widget Ui - widgetEvent
 ************************************************************/
function widgetEvent() {
    dDayEvent();
	todoEvent();
    // canendar();

}

/***********************************************************
 * widget Ui - widgetEvent
 ************************************************************/
function widgetPlus() {



}


/***********************************************************
 * wallpaper-Clock
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
	$('#wDate').html(' <strong>' + dayNames[newDate.getDay()] + '요일'+'</strong>' +' <span>' + newDate.getFullYear() + '년 ' + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + '일 ' + ' </span>' );

    // var today = new Date();
    // var hours = today.getHours();
    // var minutes = today.getMinutes();
    // var seconds = today.getSeconds();

    // //Set the AM or PM time
    // if (hours >= 12) {
    //     meridiem = " 오후";
    // } else {
    //     meridiem = " 오전";
    // }

    // //convert hours to 12 hour format and put 0 in front
    // if (hours > 12) {
    //     hours = hours - 12;
    // } else if (hours === 0) {
    //     hours = 12;
    // }

    //Put 0 in front of single digit minutes and seconds
    // if (minutes < 10) {
    //     minutes = "0" + minutes;
    // } else {
    //     minutes = minutes;
    // }

    // if (seconds < 10) {
    //     seconds = "0" + seconds;
    // } else {
    //     seconds = seconds;
    // }
    // document.getElementById("wClock").innerHTML = ('<strong>'+ hours + ":" + minutes + ":" + seconds +'</strong>' + '<span>'+ meridiem +'</span>');


}

/***********************************************************
 * widget Ui - widgetEvent - D-day
 ************************************************************/
function dDayEvent() {
    // datepicker
    $("#d-day_date").datepicker({
		  showButtonPanel: true
		});

    // 클릭한 요소를 hidden 시킴
    var d_day_remove = "#dDayList li .zmdi-delete"
    $("#w_d-day").on('click', d_day_remove, function() {
        $(this).parent().slideUp(100);
    });

    // Pressing enter
    $("#d-day_title").keypress(function(text) {

        var d_day_txt = $("#d-day_title").val();
        var d_day_num = $("#d-day_date").val();

        if (text.which == 13 && d_day_txt != "" && d_day_txt != null) {
            $("<li><em>" + d_day_num + "</em><span>" + d_day_txt + "</span><button class='i zmdi-delete'></button></li>").fadeIn().prependTo("#dDayList");
            $("#d-day_title").val("");
            $("#d-day_title").val("");
            $("#d-day_title").focus();
        }
    });

}

/***********************************************************
 * widget Ui - widgetEvent - TO-DO
 ************************************************************/
function todoEvent() {
    // 클릭한 요소를 hidden 시킴
    var todo_close = "#todoList li .zmdi-delete";
    $("#w_to-do").on("click", todo_close, function() {
        $(this).parent().slideUp(100);
    });


    // line-through 를 done class 에서 넣어줌
    var todo_completed = "#todoList li input[type=checkbox]";
    $("#w_to-do").on("click", todo_completed, function() {

		if($(this).is(":checked")) {
			$(this).parent().addClass("done");
		} else {
			$(this).parent().removeClass("done");
		}

    });

    $("#todoList").sortable({
        axis: "y",
		evert: true,
		tolerance: "pointer",
		containment: "parent",
		placeholder: "todoDrag"
    });
    $("#todoList").disableSelection();

    // Pressing enter
    $("#todo-text").keypress(function(text) {
        var todo_txt = $("#todo-text").val();

        if (text.which == 13 && todo_txt != "" && todo_txt != null) {
            $("<li><span><input type='checkbox' id='td2' name='checkbox'><label for='td2'></label><p>" + todo_txt + "</p></span></li>").fadeIn().prependTo("#todoList");
            $("#todo-text").val("");
            $("#todo-text").focus();
        }
    });

}




/***********************************************************
 * widget Ui - widgetEvent - Canendar
 ************************************************************/
function canendar() {

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

    // $('#widget_calendar').fullCalendar({
    //     header: {
    //         left: 'prev',
    //         center: 'title,today',
    //         right: 'next'
    //     },

    //     height: 'auto',
    //     contentHeight: 'auto',
    //     selectable: true,
    //     selectHelper: true,
    //     select: function(start, end) {
    //         var title = prompt('Event Title:');
    //         var eventData;
    //         if (title) {
    //             eventData = {
    //                 title: title,
    //                 start: start,
    //                 end: end
    //             };
    //             $('#widget_calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
    //         }
    //         $('#widget_calendar').fullCalendar('unselect');
    //     },

    //     // add event name to title attribute on mouseover
    //     eventMouseover: function(event, jsEvent, view) {
    //         if (view.name !== 'agendaDay') {
    //             $(jsEvent.target).attr('title', event.title);
    //         }
    //     },


    //     //defaultDate: '2017-06-04',
    //     //editable: false,
    //     eventLimit: true, // allow "more" link when too many events

    //     //한글화 옵션
    //     monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    //     monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    //     dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    //     //dayNamesShort: ["일","월","화","수","목","금","토"],

	// 	googleCalendarApiKey: '873524948001-0drpc8fusqu3kbctbeh3p67jnlm4oa3n.apps.googleusercontent.com',
    //     eventSources: [
    //         {
    //             googleCalendarId: 'nm93qkoo35j1u4r0ugbs0a4rsg@group.calendar.google.com'
    //         },
    //         {
    //             googleCalendarId: '0h4gipke96va23v5n1qj4mo47o@group.calendar.google.com',
    //             className: 'nice-event'
    //         }
    //     ]

    // });
}

/***********************************************************
 * widget Setting
 ************************************************************/
function widgetSetting() {
	// sortable
	/*
    $( "#widget .widgetSetting .widgetSetBody .mCSB_container" ).sortable({
		handle: ".widgetHeader",
		axis:"xy"
	});
	$( "#widget .widgetBox .widgetBoxBody .mCSB_container" ).disableSelection();
	*/
}
