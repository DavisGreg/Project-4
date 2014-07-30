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
		console.log("This string " + phoneValid + " follows the phone number pattern of 000-000-0000");
	} else {
		phoneValidity = false;
		console.log("This string " + phoneValid + " does not follow the phone number pattern of 000-000-0000");
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
	console.log("This string is " + emailChecked + ": " + emailValid + ": " + emailCheck);
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
	
	if ((hypertext1 === 0) || (hypertext2 ===0)) {
		var urlCheck = "This is a valid string for determining a correct URL.";
		urlChecked = true;
	} else {
		var urlCheck = "This is not a valid string for determining a correct URL.";
		urlChecked = false;
	}
	console.log("This string is " + urlChecked + ": " + urlValid + ": " + urlCheck);
};

// Call strings into the function
var urlInfo = urlStringCheck(stringCheckURL1);
urlInfo = urlStringCheck(stringCheckURL2);
urlInfo = urlStringCheck(urlInvalid);


// #4 - Title case a string

// Created string for changing beginning letter of words uppercase, while keeping the other letters lowercase
var titleCase;

// Created test string to determine validity
upperCaseMe = "hello there buddy";

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
	
	console.log(newTitleString);
};

// Call string into function
var caseInfo = titleStringCheck(upperCaseMe);


// #5 - Separation strings

