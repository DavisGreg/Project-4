// Gregory Davis
// Created for SDI Online
// July 31, 2014
// Assignment 4


alert("Now viewing Greg Davis's Assignment 4 Project JS");

// 123-456-7890 pattern

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


// aaa@bbb.ccc pattern

// Created strings for determining if the string follows the name@domain.com pattern
var stringCheckEmail;
var emailInvalid;
var emailValidity;

// Created test strings to determine validity
stringCheckEmail = "davis.gregory.86@gmail.com";
emailInvalid = "davisgregory@google";

// Created function for determining test strings validity
var emailStringCheck = function (emailValid) {

	var atSign = emailValid.indexOf("@");
	var periodSign = emailValid.lastIndexOf(".");
	var emailCheck = (emailValid.substring(0, atSign) + emailValid.substring(atSign, periodSign))
	
	console.log(emailCheck);
};

var email = emailStringCheck(stringCheckEmail);
var email = emailStringCheck(emailInvalid);
