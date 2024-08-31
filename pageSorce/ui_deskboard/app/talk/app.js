/***********************************************************
 * notes js
 ************************************************************/
$(document).ready(function() {
	talk();
	context()
});

function popTalk() {
    window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}

/***********************************************************
 * calendar
 ************************************************************/
function talk() {
		
	$("#window_talk #memberlist li [data-ui='viewInfo']").click(function(){
		$("#window_talk .talkMessage" ).scrollTop($("#window_talk .talkMessage")[0].scrollHeight);// 목록에서 이름 클릭시 하단으로 스크롤
	});

	// Pressing enter
	$(document).keypress(function(t) {
		var talk_txt = $( "#talkWrite" ).val();

		if(t.which == 13 && talk_txt != "" && talk_txt != null ) {
		   $( "<div class='message_box'><div class='me'><div class='message'>"+ talk_txt +"</div></div></div>" ).fadeIn().appendTo("#window_talk .talkMessage");
		   $( "#talkWrite" ).val("");
		   $( "#talkWrite" ).focus();
		   $( "#window_talk .talkMessage" ).scrollTop($("#window_talk .talkMessage")[0].scrollHeight);// 작성시 스크롤도 함께 변경
		}
	});

}

/***********************************************************
 * context
 ************************************************************/
function context() {
	
	// contextMenu
 	 var context = $('.appSortList')
	  .nuContextMenu({
		  hideAfterClick: true,
		  items: 'ul li',
		  menu: [
				{name:'EditNote', title:'Edit', icon:'zmdi-edit',}, 
				{name:'void'}, 
				{name:'removeNote', title:'Delete', icon:'zmdi-delete',},
				]
	  });

}
