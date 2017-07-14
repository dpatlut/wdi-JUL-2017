// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".


window.addEventListener('keypress', function(e){
	// var key = e.key;
	// document.getElementById('title').innerHTML = e.key;

	var key = e.keycode
	document.getElementById('title').innerHTML = String.fromCharCode(key);
});




// Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.

document.getElementById('submitForm').addEventListener('submit', function(e){
	var username = document.getElementById('username').value
	var password = document.getElementById('passwordSubmit').value
	var checkValues = (username.match(/[0-9]/g) != null ) && ( password == "12345678" )

	if(!checkValues) {
		alert('HEY YOU! THATS THE WRONG PASSWORD FOOL')
	}
});