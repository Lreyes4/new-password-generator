// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharacters = ["!", "@", "#", "$", "%", "&"]
var chosenCharacters = []

function init() {
  var passwordlength = prompt("How long would you like your password to be?")
  console.log(passwordlength);

  var hasLowerCase = confirm("Do you want to include lowercase letters in your password?")

  var hasUpperCase = confirm("Do you want to include uppercase letters in your password?")

  var hasNumber = confirm("Do you want to include numbers in your password?")

  var hasSpecialChars = confirm("Do you want to include special characters in your password?")

  if (hasLowerCase){
    chosenCharacters=chosenCharacters.concat(lowercaseLetters)
    console.log(chosenCharacters)}}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
init()