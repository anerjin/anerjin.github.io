/***********************************************************
 * landing Ui
 ************************************************************/
$(document).ready(function() {
	
	var app = ".container .appList .appPop"
	
	$(app).click(function(){
		var appName = $(this).attr("data-pop");
		
		$('#deskWrap').append( "<div id='"+appName+"' class='multiModal'></div>" );
		$('#deskWrap #'+appName).load('./ui_page/'+appName+'.html');
		
		var appClose = "[data-ui='appClose']";
		
		$("#deskWrap").on("click", appClose, function() {
			$(this).closest('.multiModal').addClass("hide").delay(280).queue(function(){
				$(this).remove();
			})
		});
	
	});

});

