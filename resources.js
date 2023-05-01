// create an array of three random users
var users = [
	{username: "aguanill", password: "Pass1", name: "Ángel Guanill"},
	{username: "dduran", password: "Pass2", name: "Dereck Duran"},
	{username: "arodriguez", password: "Pass3", name: "Andrés Rodríguez"},
	{username: "agavillan", password: "Pass4", name: "Anthony Gavillán"},
	{username: "esoto", password: "Pass5", name: "Elyann Soto"},
	{username: "eperez", password: "Pass6", name: "Edgard Pérez"},
	{username: "hramos", password: "Pass7", name: "Hector Ramos"},
	{username: "agarcia", password: "Pass8", name: "Abner García"},
	{username: "avargas", password: "Pass9", name: "Ángel Vargas"},
	{username: "dmejias", password: "Pass10", name: "Diego Mejías"},
	{username: "csurillo", password: "Pass11", name: "Carlos Surillo"},
	{username: "ldelatorre", password: "Pass12", name: "Luis de la Torre"},
	{username: "aalvarez", password: "Pass13", name: "Anthony Álvarez"},
	{username: "lgomez", password: "Pass14", name: "Luis Gomez"},
	{username: "srivera", password: "Pass15", name: "Sandro Rivera"}
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
