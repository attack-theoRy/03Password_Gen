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
function generatePassword(passLength, isUppercase, isLowercase, isNumbers, isSpecial)
{
  passwordString = '';
  if(isUppercase)
    passwordString += uppercase;
    else{}

  if(isLowercase)
    passwordString += lowercase;

  if(isNumbers)
    passwordString += numbers;

  if(isSpecial)
    passwordString += specialChars;

    var userPassword = ''
      

   for(var i=0; i < passLength; i++)
  {
    userPassword += passwordString.charAt(Math.floor(Math.random() * passwordString.length))
  }

  return userPassword
  
}

// Write password to the #password input
function writePassword() {

  var passLength = parseInt(prompt("How long would you like the password to be? 8-128"))
  isUppercase = confirm("Use uppercase? Ok for yes, cancel for No")
  isLowercase = confirm("Use lowercase? Ok for yes, cancel for No")
  isNumbers = confirm("Use Numbers? Ok for yes, cancel for No")
  isSpecial = confirm("Use special characters? Ok for yes, cancel for No")

  if(!isUppercase && !isLowercase && !isNumbers && !isSpecial)
  {
    alert("You haven't selected any criteria")
  }
  else
  {
  var password = generatePassword(passLength, isUppercase, isLowercase, isNumbers, isSpecial);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
