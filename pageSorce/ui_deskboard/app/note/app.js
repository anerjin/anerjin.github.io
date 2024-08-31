/***********************************************************
 * notes js
 ************************************************************/
$(document).ready(function() {
	notes();
	toDo();
	notesEditor();
	context();
});

/***********************************************************
 * toDo addon
 ************************************************************/
 
function toDo() {
	
	// line-through 를 done class 에서 넣어줌
    var todoCompleted = "#app_to_do ul li .check input[type=checkbox]";
    $(todoCompleted).click(function() {

		if($(this).is(":checked")) {
			$(this).parents("li").addClass("done");
		} else {
			$(this).parents("li").removeClass("done");
		}
		
    });

}

/***********************************************************
 * notesEditor
 ************************************************************/
 
function notes() {
	
	var noteQuick = "#window_note .mIndex ul li"
	

	var btnTodoOpen = "[data-ui='btnTodoOpen']";
	var btnQuickNote = "[data-ui='btnQuickNote']";
	var btnNotebook = "[data-ui='btnNotebook']";
	
	// btnDdayOpen
	$(noteQuick).click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		$(btnNotebook).removeClass("active");
		
		
		if($(this).attr('data-ui')=='btnTodoOpen'){
			$("#app_to_do").addClass("active");
		}
		
		if($(this).attr('data-ui')=='btnQuickNote'){
			$("#app_to_do").removeClass("active");
		}
	});
	


}

/***********************************************************
 * notesEditor
 ************************************************************/
function notesEditor() {
		
	var toolbarOptions = [
		[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
		['bold', 'italic', 'underline', 'strike'],        // toggled buttons
		[{ 'list': 'ordered'}, { 'list': 'bullet' },{ 'indent': '-1'}, { 'indent': '+1' }],
		//[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
		[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
		[{ 'align': [] }],
		['blockquote', 'code-block'],
		['link', 'video'],
		['clean']                                         // remove formatting button
		//[{ 'header': 1 }, { 'header': 2 }],               // custom button values
		//[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
		//[{ 'font': [] }],
		//[{ 'direction': 'rtl' }],                         // text direction
		//[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
	];
	
	var quill = new Quill('#editor', {
		modules: {
		toolbar: toolbarOptions
		},
		theme: 'snow'
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
