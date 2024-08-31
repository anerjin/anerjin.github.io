/***********************************************************
 * mail js
 ************************************************************/
$(document).ready(function() {
	mailEditor();
});

/***********************************************************
 * mailEditor
 ************************************************************/
function mailEditor() {
		
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
	
	var quill = new Quill('#emailEditor', {
		modules: {
		toolbar: toolbarOptions
		},
		theme: 'snow'
	});

}

