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
	var currentTimeString = "As of " + w + m + md + ", " + y + ", at " + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay + ", you have traveled approximately,<br>&#8681;<br>";

	// Update the time display
	document.getElementById("clockP").innerHTML = currentTimeString;
};

var yearBorn = document.getElementById("yearBorn");
var monthBorn = document.getElementById("monthBorn");
var dayBorn = document.getElementById("dayBorn");

var odometer = document.getElementById("odometer");
var odometerP = document.getElementById("odometerP");

var spaceLeft = document.getElementsByClassName("spaceLeft")[0];
var spaceRight = document.getElementsByClassName("spaceRight")[0];

// FUNCTION FOR ADDING VENDOR PREFIXES TO ANIMATION PROPERTY
var styleAnimation = function(element, value) {
	element.style.webkitAnimation = value;
	element.style.animation = value;
};

// GETS INPUTS, CALCULATES SPACE-MILES TRAVELED, AND PRINTS TO THE SCREEN IF CONDITIONS ARE RIGHT
function getMiles() {
	var dob_Y = yearBorn.value;
	var dob_M = monthBorn.value;
	var dob_D = dayBorn.value;

		setMileCounter = setInterval(function(){ mileCounter(); }, 100);
		function mileCounter() {
			var currentTime = new Date ( );
			var bd = new Date(dob_Y,dob_M - 1,dob_D);
			var odometerReading = (currentTime - bd) / 1000 * 797;
			odometer.innerHTML = Math.round(odometerReading).toLocaleString();
			yearBorn.disabled = true;
			monthBorn.disabled = true;
			dayBorn.disabled = true;
		};
	
	odometerP.style.color = "ivory";
	
	// ADD SPACE ANIMATIONS TO WINDSHIELD
	if (width > 600) {
		styleAnimation(spaceLeft, "spaceScrollL 1s linear infinite");
		styleAnimation(spaceRight, "spaceScrollR 1s linear infinite");

	}
};

// RESETS EVERYTHING BACK TO SCRATCH
function reset() {
	yearBorn.disabled = false;
	monthBorn.disabled = false;
	dayBorn.disabled = false;
	yearBorn.value = "";
	monthBorn.value = "";
	dayBorn.value = "";
	clearInterval(setMileCounter);
	odometer.innerHTML = "000,000,000,000,000,000";
	odometerP.style.color = "rgb(50,50,50)";
	styleAnimation(spaceLeft, "none");
	styleAnimation(spaceRight, "none");

};

//CREATE OPTION NODES FOR YEAR BORN SELECT
for(var i = 2015; i > 1899; i--) {
	var option = document.createElement("option");
	var node = document.createTextNode(i);
	option.appendChild(node);

	// var element = document.getElementById("yearBorn");
	yearBorn.appendChild(option);
}

// CREATE OPTION NODES FOR MONTHBORN SELECT
for(var i = 1; i < 13; i++) {
	var option = document.createElement("option");
	var node = document.createTextNode(i);
	option.appendChild(node);

	// var element = document.getElementById("monthBorn");
	monthBorn.appendChild(option);
}

//CREATE OPTION NODE FOR DAY BORN
for(var i = 1; i < 32; i++) {
	var option = document.createElement("option");
	var node = document.createTextNode(i);
	option.appendChild(node);

	// var element = document.getElementById("dayBorn");
	dayBorn.appendChild(option);
}


// INTRO BUTTONS
var introButton = document.getElementById("introButton");
var closeIntroButton = document.getElementById("closeIntroButton");
var windshieldText = document.getElementById("windshieldText");
var hiddenText = document.getElementsByClassName("hiddenText");

introButton.onclick = function() {
	introButton.style.display = "none";
	closeIntroButton.style.display = "block";
	windshieldText.style.background = "rgba(255,255,240,0.5)";
	windshieldText.style.paddingTop = "10px";
	windshieldText.style.paddingBottom = "10px";
	for (var i = 0; i < hiddenText.length; i++) {
		hiddenText[i].style.display = "block";
	}
};

closeIntroButton.onclick = function() {
	closeIntroButton.style.display = "none";
	introButton.style.display = "block";
	windshieldText.style.background = "none";
	windshieldText.style.paddingTop = "0px";
	windshieldText.style.paddingBottom = "0px";
	for (var i = 0; i < hiddenText.length; i++) {
		hiddenText[i].style.display = "none";
	}
};


/////////////////////////////////////////////////////////////////
//BACKGROUND GRADIENT ANIMATION FOR GLOBE IN MISSION STATEMENT//
///////////////////////////////////////////////////////////////

document.getElementById("coolGlobe").innerHTML = '<div id="continentalLightshow"><div id="earth"></div></div>';
document.getElementById("coolGlobe2").innerHTML = '<div id="continentalLightshow2"><div id="earth2"></div></div>';

var rn = [];



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

var IncreaseValue = function(val) {
	if (val < 255) {
			val += 1;
		} else if (val > 254) {
			val = Math.floor(Math.random() * 255);
		}
};

var decreaseValue = function(val) {
	if (val < 256 && val > 0) {
			val -= 1;
		} else if (val < 1) {
			val = Math.floor(Math.random() * 255);
		}
};

var colors = "";

var continentalLightshow = document.getElementById("continentalLightshow");
var continentalLightshow2 = document.getElementById("continentalLightshow2");

setInterval(function(){ randomBackgroundGradient(); }, 25);

if (width < 500) {
	continentalLightshow.style.background = "khaki";
	continentalLightshow2.style.background = "khaki";
} else if (width > 499) {
	
	function randomBackgroundGradient() {
		continentalLightshow.style.background = "-webkit-repeating-linear-gradient(rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1), rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1))";
		continentalLightshow.style.background = "repeating-linear-gradient(rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1), rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1))";
		
		continentalLightshow2.style.background = "-webkit-repeating-linear-gradient(rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1), rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1))";
		continentalLightshow2.style.background = "repeating-linear-gradient(rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1), rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1))";
		
		IncreaseValue(a);
		IncreaseValue(b);
		IncreaseValue(c);
		
		decreaseValue(d);
		decreaseValue(e);
		decreaseValue(f);
		
		IncreaseValue(g);
		IncreaseValue(h);
		IncreaseValue(i);
		
		decreaseValue(j);
		decreaseValue(k);
		decreaseValue(l);
	};
	
}

