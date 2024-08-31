/***********************************************************
 * bookmark js
 ************************************************************/
$(document).ready(function() {
	bookmark();
	context()
});

/***********************************************************
 * calendar
 ************************************************************/
function bookmark() {
		
	// Pressing enter
	$(document).keypress(function(t) {
		var bookmark_url = $( "#bookmark_url" ).val();

		if(t.which == 13 && bookmark_url != "" && bookmark_url != null ) {
		   $( "<li><button class='i zmdi-star'></button><a href='"+ bookmark_url +"' target='_blank'><img src='"+ bookmark_url +"/favicon.ico'>"+ "<span>" + bookmark_url + "</span>" +"</a><button type='button' class='i zmdi-delete'></button></li>" ).fadeIn().prependTo("#window_bookmark .bookmarkList");
		   $( "#bookmark_url" ).val("");
		   $( "#bookmark_url" ).focus();
		   
		   
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
