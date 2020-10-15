// Assignment Code
var generateBtn = document.querySelector("#generate");

// variable declarations for possible password configurations
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


/* Create Password function given the conditionals */
function generatePassword(passLength, isUppercase, isLowercase, isNumbers, isSpecial)
{
  // set variable for possible password string
  passwordString = '';

  // add uppercase characters if chosen
  if(isUppercase)
    passwordString += uppercase;

  // add lowercase characters if chosen
  if(isLowercase)
    passwordString += lowercase;

  // add numbers if chosen
  if(isNumbers)
    passwordString += numbers;

  // add special characters if chosen 
  if(isSpecial)
    passwordString += specialChars;

    var userPassword = ''
      

  // Logic for password generation
   for(var i=0; i < passLength; i++)
  {
    // add a random variable
    userPassword += passwordString.charAt(Math.floor(Math.random() * passwordString.length))
  }

  return userPassword
  
}

// Write password to the #password input
function writePassword() {

  // ask for length of desired password
  var passLength = parseInt(prompt("How long would you like the password to be? 8-128"))
  
  // check to make sure the password is within range
  while((passLength > 128) || (passLength < 8))
  {
    passLength = parseInt(prompt("That's out of range, please select a number between 8 and 128"))
  }

  // ask if they want to use uppercase in the desired password
  isUppercase = confirm("Use uppercase? Ok for yes, cancel for No")

  // ask if they want to use lowercase in the desired password
  isLowercase = confirm("Use lowercase? Ok for yes, cancel for No")

  // ask if they want to use numbers in the desired password
  isNumbers = confirm("Use Numbers? Ok for yes, cancel for No")

  // ask if they want use special characters in the desired password
  isSpecial = confirm("Use special characters? Ok for yes, cancel for No")

  // check to make sure they selected at least one conditional
  if(!isUppercase && !isLowercase && !isNumbers && !isSpecial)
  {
    alert("You haven't selected any criteria")
  }
  else
  {
  
  // run the password generator after all criteria has been met
  var password = generatePassword(passLength, isUppercase, isLowercase, isNumbers, isSpecial);
  
  var passwordText = document.querySelector("#password");
  
  // put the generated password in the textbox 
  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
