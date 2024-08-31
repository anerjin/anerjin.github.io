/***********************************************************
 * calendar js
 ************************************************************/
$(document).ready(function() {
	calendarJs();
	context();
});

/***********************************************************
 * calendar
 ************************************************************/
function calendarJs() {

		$('#appCalendar').fullCalendar({
		header: {
			left: 'title',
			//center: '',
			right: 'prev,today,next'

		},

		height: 'auto',
		contentHeight:'auto',
		selectable: true,
		selectHelper: true,
		select: function(start, end) {
			var title = prompt('Event Title:');
			var eventData;
			if (title) {
				eventData = {
					title: title,
					start: start,
					end: end
				};
				$('#appCalendar').fullCalendar('renderEvent', eventData, true); // stick? = true
			}
			$('#appCalendar').fullCalendar('unselect');
		},

	// add event name to title attribute on mouseover
	eventMouseover: function(event, jsEvent, view) {
		if (view.name !== 'agendaDay') {
			$(jsEvent.target).attr('title', event.title);
		}
	},
		//defaultDate: '2016-10-01',
		editable: true,
		eventLimit: true, // allow "more" link when too many events

		//한글화 옵션
		monthNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
		monthNamesShort: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
		dayNames: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
		//dayNamesShort: ["일","월","화","수","목","금","토"],

		events: [
			{
				title: 'All Day Event',
				start: '2017-05-01'
			},
			{
				title: 'Long Event',
				start: '2017-05-07',
				end: '2017-05-10'
			},
		]
	});

}



/***********************************************************
 * context
 ************************************************************/
function context() {

	// contextMenu
	var context = $('#calendarCatagory')
	.nuContextMenu({
	  hideAfterClick: true,
	  items: 'ul li',
	  menu: [
			{name:'EditNote', title:'수정', icon:'mti-border-color',},
			{name:'void'},
			{name:'removeNote', title:'삭제', icon:'mti-delete',},
			]
	});


}
