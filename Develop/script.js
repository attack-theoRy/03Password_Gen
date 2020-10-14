// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


/* Initialize booleans for generation--whether or not to include lowercase,
uppercase, numbers and/or special characters */

isLowercase = document.getElementById("lowercase")
isUppercase = document.getElementById("uppercase")
isNumbers = document.getElementById("numbers")
isSpecial = document.getElementById("specialChar")


/* Create Password function given the conditionals */
function generatePassword()
{

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
