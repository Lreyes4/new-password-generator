// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharacters = ["!", "@", "#", "$", "%", "&"]
var chosenCharacters = []

function generatePassword() {
  //prompt user with questions to figure out what kind of password they want
  var passwordlength = prompt("How long would you like your password to be?")
  console.log(passwordlength);

  var hasLowerCase = confirm("Do you want to include lowercase letters in your password?")

  var hasUpperCase = confirm("Do you want to include uppercase letters in your password?")

  var hasNumber = confirm("Do you want to include numbers in your password?")

  var hasSpecialChars = confirm("Do you want to include special characters in your password?")

  //build-up possible password characters into the chosen characters array
  if (hasLowerCase){
    chosenCharacters=chosenCharacters.concat(lowercaseLetters)
    console.log(chosenCharacters)
  }

  if (hasUpperCase){
    chosenCharacters=chosenCharacters.concat(uppercaseLetters)
    console.log(chosenCharacters)
  }

  if (hasNumber){
    chosenCharacters=chosenCharacters.concat(numbers)
    console.log(chosenCharacters)
  }

  if (hasSpecialChars){
    chosenCharacters=chosenCharacters.concat(specialCharacters)
    console.log(chosenCharacters)
  }
  //Loop through for every character the user wants in their password
  var finalPassword="";
  for(var i = 0; i < passwordlength; i++){
    //Get random number and use it to get a random character from the array
    var randomNumber=Math.floor(Math.random()* chosenCharacters.length)
    var randomChar=chosenCharacters[randomNumber]
    console.log(randomNumber, randomChar);
    //Build-up password string
    finalPassword=finalPassword.concat(randomChar)
  }
  return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
