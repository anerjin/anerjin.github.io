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
		$("#window_talk .talkMessage" ).scrollTop($("#window_talk .talkMessage")[0].scrollHeight);// ��Ͽ��� �̸� Ŭ���� �ϴ����� ��ũ��
	});

	// Pressing enter
	$(document).keypress(function(t) {
		var talk_txt = $( "#talkWrite" ).val();

		if(t.which == 13 && talk_txt != "" && talk_txt != null ) {
		   $( "<div class='message_box'><div class='me'><div class='message'>"+ talk_txt +"</div></div></div>" ).fadeIn().appendTo("#window_talk .talkMessage");
		   $( "#talkWrite" ).val("");
		   $( "#talkWrite" ).focus();
		   $( "#window_talk .talkMessage" ).scrollTop($("#window_talk .talkMessage")[0].scrollHeight);// �ۼ��� ��ũ�ѵ� �Բ� ����
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
