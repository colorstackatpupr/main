// create an array of three random users
var users = [
	{username: "aguanill", password: "pass1", name: "Angel Guanill"},
	{username: "dduran", password: "pass2", name: "Jane Smith"},
	{username: "hrodriguez", password: "pass3", name: "Bob Johnson"}
];

// set the timer in seconds (10 minutes = 600 seconds)
var timer = 600;

// function to validate the username and password
function validate(username, password) {
	for (var i = 0; i < users.length; i++) {
		if (users[i].username === username && users[i].password === password) {
			return users[i].name;
		}
	}
	return false;
}

// function to start the timer
function startTimer() {
	var countdown = setInterval(function() {
		timer--;
		if (timer === 0) {
			clearInterval(countdown);
			window.location.href = "resources.html";
		}
	}, 1000);
}

// function to handle the login form submission
function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var name = validate(username, password);
	if (name) {
		// set the session storage with the user's name
		sessionStorage.setItem("name", name);
		startTimer();
		// redirect to the resources_logged.html page
        window.location.replace("resources_logged.html");;
		return false;
	} else {
		// display an error message if the login info is incorrect
		document.getElementById("errorMessage").innerHTML = "Invalid username or password";
		return false;
	}
}
