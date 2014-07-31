// Gregory Davis
// Created for SDI Online
// July 31, 2014
// Assignment 4


alert("Now viewing Greg Davis's Assignment 4 Project JS");

// #1 - 123-456-7890 pattern

// Created strings for determining if the string follows the 000-000-000 pattern
var stringCheckPhone;
var phoneInvalid;
var phoneValidity;

// Created test strings to determine validity
stringCheckPhone = "702-480-3875";
phoneInvalid = "972-22-1010";

// Created function for determining test strings validity
var phoneStringCheck = function (phoneValid) {
	
	if (phoneValid.indexOf("-") === 3 && phoneValid.lastIndexOf("-") === 7) {
		phoneValidity = true;
		console.log("#1 - This string " + phoneValid + " follows the phone number pattern of 000-000-0000");
	} else {
		phoneValidity = false;
		console.log("#1 - This string " + phoneValid + " does not follow the phone number pattern of 000-000-0000");
	}
	console.log(phoneValid + ": " + phoneValidity);
};

// Call both strings into the function
var phoneCheck = phoneStringCheck(stringCheckPhone);
var phoneCheck = phoneStringCheck(phoneInvalid);



// #2 - aaa@bbb.ccc pattern

// Created strings for determining if the string follows the name@domain.com pattern
var stringCheckEmail;
var emailInvalid;
var emailValidity;

// Created test strings to determine validity
stringCheckEmail = "davis.gregory.86@gmail.com";
emailInvalid = "davisgregory@google";

var atSign = -1;
var periodSign = -1;

// Created function for determining test strings validity
var emailStringCheck = function (emailValid) {

	atSign = emailValid.indexOf("@");
	periodSign = emailValid.lastIndexOf(".");
	var emailChecked;
		
	if (atSign === -1) {
		var emailCheck = "This is not a valid string for determining a correct email address.";
		emailChecked = false;
	}
	
	if (periodSign === -1) {
		var emailCheck = "This is not a valid string for determining a correct email address.";
		emailChecked = false;
	}
	
	if ((atSign != 0) && (periodSign !=0)) {
		var emailCheck = "This is a valid string for determining a correct email address.";
		emailChecked = true;
	}
	
	if ((atSign === -1) || (periodSign === -1)) {
		var emailCheck = "This is not a valid string for determining a correct email address.";
		emailChecked = false;
	}
	console.log("#2 - This string is " + emailChecked + ": " + emailValid + ": " + emailCheck);
};

// Call strings into the function
var email = emailStringCheck(stringCheckEmail);
email = emailStringCheck(emailInvalid);



// #3 - http:// or https:// pattern

// Created strings for determining if the string follows the http:// or https:// pattern
var stringCheckURL1;
var stringCheckURL2;
var urlInvalid;
var urlValidity;

// Created test strings to determine validity
stringCheckURL1 = "http://www.google.com/";
stringCheckURL2 = "https://chase.com/";
urlInvalid = "yahoo.com/";

// Created function for determining test strings validity
var urlStringCheck = function (urlValid) {

	var hypertext1 = urlValid.indexOf("http://");
	var hypertext2 = urlValid.indexOf("https://");
	var urlChecked;
	
	if ((hypertext1 === 0) || (hypertext2 === 0)) {
		var urlCheck = "This is a valid string for determining a correct URL.";
		urlChecked = true;
	} else {
		var urlCheck = "This is not a valid string for determining a correct URL.";
		urlChecked = false;
	}
	console.log("#3 - This string is " + urlChecked + ": " + urlValid + ": " + urlCheck);
};

// Call strings into the function
var urlInfo = urlStringCheck(stringCheckURL1);
urlInfo = urlStringCheck(stringCheckURL2);
urlInfo = urlStringCheck(urlInvalid);



// #4 - Title case a string

// Created string for changing beginning letter of words uppercase, while keeping the other letters lowercase
var titleCase;

// Created test string to determine validity
var upperCaseMe = "hello there buddy";

// Created function for determining test string validity
var titleStringCheck = function (titleValid) {
	
	var titleText = titleValid.charAt(0);
	var titleSpace = titleValid.indexOf(" ");
	var lastTitleSpace = titleValid.lastIndexOf(" ");
	var titleEnd = titleValid.length;
	var nextTitleText = titleValid.charAt(titleSpace+1);
	var lastTitleText = titleValid.charAt(lastTitleSpace+1);
	var lowerText1 = titleValid.substring(1, titleSpace);
	var lowerText2 = titleValid.substring((titleSpace+2), lastTitleSpace);
	var lowerText3 = titleValid.substring((lastTitleSpace+2), titleEnd);
	
	titleText = titleText.toUpperCase();
	lowerText1 = lowerText1.toLowerCase();
	nextTitleText = nextTitleText.toUpperCase();
	lowerText2 = lowerText2.toLowerCase();
	lastTitleText = lastTitleText.toUpperCase();
	lowerText3 = lowerText3.toLowerCase();
	titleSpace = " ";
	lastTitleSpace = " ";
	
	var newTitleString = titleText + lowerText1 + titleSpace + nextTitleText + lowerText2 + lastTitleSpace + lastTitleText + lowerText3;
	
	console.log("#4 - Title case new string is: " + newTitleString);
};

// Call string into function
var caseInfo = titleStringCheck(upperCaseMe);



// #5 - Separation strings

// Created strings for changing the separator of items in a string
var oldString;
var oldSeparator;
var newSeparator;
var newString;

// created test strings to determine validity
oldString = "car, house, family";
oldSeparator = ", ";
newSeparator = "/";

// Created function for determining test string validity
var separatorStringCheck = function (separatorValid) {
	
	var findSeparator = separatorValid.indexOf(oldSeparator);
	var word1 = separatorValid.substring(0, findSeparator);
	var lastSeparator = separatorValid.lastIndexOf(oldSeparator);
	var word2 = separatorValid.substring((findSeparator+1), lastSeparator);
	var endSeparator = separatorValid.length;
	var word3 = separatorValid.substring((lastSeparator+1), endSeparator);
	
	newString = (word1 + newSeparator + word2 + newSeparator + word3);
	
	console.log("#5 - The new string is: " + newString);
};

// Call string into function
var newStringCheck = separatorStringCheck(oldString);



// #6 - Format number for a certain number of decimal places

// Created strings for determining a number with a decimal, along with a number to use as the amount of decimal places to format to
var numdecimal;
var decimalPlaces;

// Created test strings to determine validity
numDecimal = 7.625008914;
decimalPlaces = 3;

// Created function for determining test string validity
// MAKE UP - created number function that was missing in project 3
var decimalCheck = function (numberDem, fixedNum) {
	
	var newNum = numberDem.toFixed(fixedNum);
	console.log("#6 - The new limited number is: " + newNum);
};

// Call string to function
var numCk = decimalCheck(numDecimal, decimalPlaces);



// #7 Fuzzy-match a number

// Created strings for determining if above or below a number with a certain percent
var num1;
var num2;
var num3;

// Created test strings to determine validity
num1 = 90;
num2 = 120;
num3 = 75;

// Created function for determining test string validity
var fuzzyNum = function (smallNum, bigNum, percentNum) {

	var number1 = smallNum;
	var number2 = bigNum;
	var number3 = percentNum;
	
	if (number1 > number2) {
		fuzzyMessage = "#7 - The first number: " + number1 + " is bigger than the second number: " + number2;
	} else if (number1 < number2) {
		fuzzyMessage = "#7 - The first number: " + number1 + " is smaller than the second number: " + number2;
	} else {
		fuzzyMessage = "#7 - The first number is equal to the second number.";
	}
	
	percentNumber = (number1 / number2) * 100;
	
	if (percentNumber <= number3) {
		fuzzMessage = number1 + " is within " + percentNumber + "% of " + number2;
	} else {
		fuzzMessage = number1 + " is not within " + percentNumber + "% of " + number2;
	}
	
	console.log(fuzzyMessage);
	console.log(fuzzMessage);
};

// Call string to function
var fuzzyCheck = fuzzyNum(num1, num2, num3);



// #8 - Find number of days & hours difference between 2 dates

// Created strings for determining math between 2 dates
var dateTime1;
var dateTime2;

// Created test strings to determine validity
dateTime1 = new Date();
dateTime2 = new Date("July 04, 2014 12:00:00");

// Created function for date math
// MAKE UP - created a math function that was missing in assignment 3
var dateCount = function (dateMath1, dateMath2) {

	var dateCounter = dateMath1 - dateMath2;
	
	var hours = dateCounter / 3600000;
	var days = hours / 24;
	daysWhole = parseInt(days);
	var hoursLeft = (days - daysWhole) * 24;
	hoursLeft = Math.round(hoursLeft);
	
	var dateMessage = "#8 - It's been " + daysWhole + " days & " + hoursLeft + " hours from " + dateMath2 + " to " + dateMath1;
	
	console.log(dateMessage);
};

var countedTime = dateCount(dateTime1, dateTime2);



// #9 Convert string number to actual number

// Created strings for changing string to number
var stringNum;
var numberNum;

// Created test strings to determine validity
stringNum = "365";
numberNum = "520.67256";

// Created function for changing string to number
// MAKE UP - a function that were not offered in assignment 3

var changeString = function (stringChange) {

	var numberChange = parseFloat(stringChange);
	
	console.log('#9 - The string "' + stringChange + '" is now changed to a number: ' + numberChange + '.');

};

var numberFunction = changeString(stringNum);
numberFunction = changeString(numberNum);

