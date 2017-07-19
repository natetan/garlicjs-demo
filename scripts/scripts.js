$(document).ready(function() {

	$('#verify-button').on('click', verifyFields);

	function verifyFields() {
		var textareas = $('.text-area');
		var jsonObject = {};
		var errorMessage = "Fields not verified:\n\n";
		var isValid = true;
		for (var i = 0; i < textareas.length; i++) {
			var name = textareas[i].name;
			var value = textareas[i].value;
			if (value == null || value == "" || value == undefined) {
				errorMessage += name + "\n"
				isValid = false;
			}
			jsonObject[name] = value;
		}
		if (!isValid) {
			alert(errorMessage);
		}
		console.log("After loop: " + JSON.stringify(jsonObject, null, " "));
	}
});













