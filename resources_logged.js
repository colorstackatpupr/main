// function to get the remaining time and update the timer
function startTimer() {
	var timeLeft = sessionStorage.getItem("timer");
	var countdown = setInterval(function() {
		timeLeft--;
		sessionStorage.setItem("timer", timeLeft);
		document.getElementById("timer").innerHTML = "Time remaining: " + timeLeft + " seconds";
		if (timeLeft === 0) {
			clearInterval(countdown);
			logout();
		}
	}, 1000);
	document.getElementById("name").innerHTML = sessionStorage.getItem("name");
	document.getElementById("timer").innerHTML = "Time remaining: " + timeLeft + " seconds";
}

// function to handle the logout button click
function logout() {
    // clear the session storage and redirect to the resources.html page
    sessionStorage.clear();
    window.location.replace("resources.html");;
    }