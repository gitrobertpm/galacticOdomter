// GALACTIC ODOMTER JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

// THIS FUNCTION CREATES THE TICKING CLOCK AND IS CALLED IN THE BODY TAG OF THE HTML.  A LOT OF WHAT I USED FOR THE CLOCK CAME FROM THIS COOL ARTICLE I FOUND: http://www.elated.com/articles/creating-a-javascript-clock/  
// BUT I MADE SOME CHANGES 
function updateClock() {
	var currentTime = new Date ( );
	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );

	// WEEKDAYS FROM NUMBERS TO NAMES
	var weekday = new Array(7);
	weekday[0]=  "Sunday, ";
	weekday[1] = "Monday, ";
	weekday[2] = "Tuesday, ";
	weekday[3] = "Wednesday, ";
	weekday[4] = "Thursday, ";
	weekday[5] = "Friday, ";
	weekday[6] = "Saturday, ";
	var w = weekday[currentTime.getDay()];
	
	// MONTHS FORM NUMBERS TO NAMES
	var month = new Array();
	month[0] = "January ";
	month[1] = "February ";
	month[2] = "March ";
	month[3] = "April ";
	month[4] = "May ";
	month[5] = "June ";
	month[6] = "July ";
	month[7] = "August ";
	month[8] = "September ";
	month[9] = "October ";
	month[10] = "November ";
	month[11] = "December ";
	var m = month[currentTime.getMonth()];
	
	var md = currentTime.getDate(); 
	
	var y = currentTime.getFullYear();
	
	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	// Choose either "AM" or "PM" as appropriate
	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

	// Convert the hours component to 12-hour format if needed
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

	// Convert an hours component of "0" to "12"
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

	// Compose the string for display
	var currentTimeString = "As of " + w + m + md + ", " + y + ", at " + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay + ", you have traveled approximately, ";

	// Update the time display
	document.getElementById("clockP").innerHTML = currentTimeString;
};

// GETS INPUTS, CALCULATES SPACE-MILES TRAVELED, AND PRINTS TO THE SCREEN IF CONDITIONS ARE RIGHT
function getMiles() {
	var dob_Y = document.getElementById("yearBorn").value;
	var dob_M = document.getElementById("monthBorn").value;
	var dob_D = document.getElementById("dayBorn").value;
	
	if (dob_Y == "" || isNaN(dob_Y) || dob_M == "" || isNaN(dob_M) || dob_D == "" || isNaN(dob_D)) {
		alert("All entries must be in the form of numbers. Try again, please.");
	} else {
		setMileCounter = setInterval(function(){ mileCounter(); }, 100);
		function mileCounter() {
			var currentTime = new Date ( );
			var bd = new Date(dob_Y,dob_M - 1,dob_D);
			var odometerReading = (currentTime - bd) / 1000 * 797;
			document.getElementById("odometer").innerHTML = Math.round(odometerReading).toLocaleString();
			document.getElementById("yearBorn").disabled = true;
			document.getElementById("monthBorn").disabled = true;
			document.getElementById("dayBorn").disabled = true;
		}
	}
	
	document.getElementById("odometerP").style.color = "ivory";
};

// RESETS EVERYTHING BACK TO SCRATCH
function reset() {
	document.getElementById("yearBorn").disabled = false;
	document.getElementById("monthBorn").disabled = false;
	document.getElementById("dayBorn").disabled = false;
	document.getElementById("yearBorn").value = "";
	document.getElementById("monthBorn").value = "";
	document.getElementById("dayBorn").value = "";
	clearInterval(setMileCounter);
	document.getElementById("odometer").innerHTML = "000,000,000,000,000,000";
	document.getElementById("odometerP").style.color = "rgb(50,50,50)";
};

//CREATE OPTION NODES FOR YEAR BORN SELECT
for(var i = 2015; i > 1899; i--) {
	var option = document.createElement("option");
	var node = document.createTextNode(i);
	option.appendChild(node);

	var element = document.getElementById("yearBorn");
	element.appendChild(option);
}

// CREATE OPTION NODES FOR MONTHBORN SELECT
for(var i = 1; i < 13; i++) {
	var option = document.createElement("option");
	var node = document.createTextNode(i);
	option.appendChild(node);

	var element = document.getElementById("monthBorn");
	element.appendChild(option);
}

//CREATE OPTION NODE FOR DAY BORN
for(var i = 1; i < 32; i++) {
	var option = document.createElement("option");
	var node = document.createTextNode(i);
	option.appendChild(node);

	var element = document.getElementById("dayBorn");
	element.appendChild(option);
}


/////////////////////////////////////////////////////////////////
//BACKGROUND GRADIENT ANIMATION FOR GLOBE IN MISSION STATEMENT//
///////////////////////////////////////////////////////////////

document.getElementById("coolGlobe").innerHTML = '<div id="continentalLightshow"><div id="earth"></div></div>';
document.getElementById("coolGlobe2").innerHTML = '<div id="continentalLightshow2"><div id="earth2"></div></div>';

var a = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
var c = Math.floor(Math.random() * 255);
var d = Math.floor(Math.random() * 255);
var e = Math.floor(Math.random() * 255);
var f = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var h = Math.floor(Math.random() * 255);
var i = Math.floor(Math.random() * 255);
var j = Math.floor(Math.random() * 255);
var k = Math.floor(Math.random() * 255);
var l = Math.floor(Math.random() * 255);

setInterval(function(){ randomBackgroundGradient(); }, 25);

if (width < 500) {
	document.getElementById("continentalLightshow").style.background = "khaki";
	
	document.getElementById("continentalLightshow2").style.background = "khaki";
} else if (width > 499) {
	
	function randomBackgroundGradient() {
		document.getElementById("continentalLightshow").style.background = "repeating-linear-gradient(rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1), rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1))";
		
		document.getElementById("continentalLightshow2").style.background = "repeating-linear-gradient(rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1), rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1))";
		
		if (a < 255) {
			a += 1;
		} else if (a > 254) {
			a = Math.floor(Math.random() * 255);
		}
		
		if (b < 255) {
			b += 1;
		} else if (b > 254) {
			b = Math.floor(Math.random() * 255);
		}
		
		if (c < 255) {
			c += 1;
		} else if (c > 254) {
			c = Math.floor(Math.random() * 255);
		}
		
		if (d < 256 && d > 0) {
			d -= 1;
		} else if (d < 1) {
			d = Math.floor(Math.random() * 255);
		}
		
		if (e < 256 && e > 0) {
			e -= 1;
		} else if (e < 1) {
			e = Math.floor(Math.random() * 255);
		}
		
		if (f < 256 && f > 0) {
			f -= 1;
		} else if (f < 1) {
			f = Math.floor(Math.random() * 255);
		}
		
		if (g < 255) {
			g += 1;
		} else if (g > 254) {
			g = Math.floor(Math.random() * 255);
		}
		
		if (h < 255) {
			h += 1;
		} else if (h > 254) {
			h = Math.floor(Math.random() * 255);
		}
		
		if (i < 255) {
			i += 1;
		} else if (i > 254) {
			i = Math.floor(Math.random() * 255);
		}
		
		if (j < 256 && j > 0) {
			j -= 1;
		} else if (j < 1) {
			j = Math.floor(Math.random() * 255);
		}
		
		if (k < 256 && k > 0) {
			k -= 1;
		} else if (k < 1) {
			k = Math.floor(Math.random() * 255);
		}
		
		if (l < 256 && l > 0) {
			l -= 1;
		} else if (l < 1) {
			l = Math.floor(Math.random() * 255);
		}
	};
	
}

