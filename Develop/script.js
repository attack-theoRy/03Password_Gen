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

  // declare password string
  var userPassword = ''

  // add uppercase characters to pool if chosen
  if(isUppercase)
  {
    passwordString += uppercase;
  }

  // add lowercase characters to pool if chosen
  if(isLowercase)
    passwordString += lowercase;

  // add number characters to pool if chosen
  if(isNumbers)
    passwordString += numbers;

  // add special characters if chosen 
  if(isSpecial)
    passwordString += specialChars;
      

  // Logic for password generation
   for(var i=0; i < passLength; i++)
  {
    // add a random character from the character pool
    userPassword += passwordString.charAt(Math.floor(Math.random() * passwordString.length))
  }

  // force characters from criteria into password
  if(isUppercase)
  {
    userPassword[userPassword.length-4] = uppercase.charAt(Math.floor(Math.random() * uppercase.length))
  }

  if(isLowercase)
  {
    userPassword[userPassword.length-3] = lowercase.charAt(Math.floor(Math.random() * lowercase.length))
  }

  if(isNumbers)
  {
    userPassword[userPassword.length-2] = numbers.charAt(Math.floor(Math.random()* numbers.length))
  }

  if(isSpecial)
  {
    userPassword[userPassword.length-1] = specialChars.charAt(Math.floor(Math.random() *specialChars.length))
  }

  return userPassword
  
}

// Write password to the #password input
function writePassword() {

// ask for length
var passLength = parseInt(prompt("How long would you like the password to be? 8-128"))

/*  attempt to check for whether character is number or string
if(typeof(passLength) === "number")
{
  passLength = parseInt(prompt("How long would you like the password to be? 8-128"))
}
else
{
  alert("not a number")
}
*/
  
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
  
  // run the password generator after all criteria has been met and return password
  var password = generatePassword(passLength, isUppercase, isLowercase, isNumbers, isSpecial);
  
  var passwordText = document.querySelector("#password");
  
  // put the generated password in the textbox 
  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
