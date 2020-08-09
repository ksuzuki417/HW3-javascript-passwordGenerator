//set of functions
var randomFunction = {
  lower : getRandomLower,
  upper : getRandomUpper,
  number : getRandomNumber,
  character : getRandomCharacter,
}


//generate random lowercase
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  console.log(getRandomLower());

//generate random uppercase
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
  console.log(getRandomUpper());

//generate random number
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
  console.log(getRandomNumber());

//generate random character
  var character = "!@#$%^&*"
  function getRandomCharacter() {
    return character[Math.floor(Math.random() * character.length)];
  }
  console.log(getRandomCharacter());

//set number of characters


function generatePassword(lower, upper, number, character){
  //create prompts
  var promptNumbers = prompt("Choose a number of character between 8 and 128")
  if (promptNumbers >= 8 && promptNumbers <= 128){
    alert ("You want " + promptNumbers + " letters")
  }
  else { alert ("Please choose between 8 and 128");
  return
  }

  console.log(promptNumbers);

var confirmLowercase = confirm("Would you like lowercase?")
  if (confirmLowercase === true){
    alert("You want lowercase");
  }
    else {alert("You do not want lowercase");
  }
var confirmUppercase = confirm("Do you want UPPERCASE?")
  if (confirmUppercase === true){
    alert("You want UPPERCASE");
  }
    else{alert("You do not want UPPERCASE")
  }
var confirmNumber = confirm("Do you want numbers?")
  if (confirmNumber === true){
    alert("You want numbers")
  }
    else {alert("You do not want numbers")
  }

var confirmSpecial = confirm("Do you want special characters (!@#$%^&*)?")
  if (confirmSpecial === true){
    alert("You want special characters")
  }
    else {alert("You do not want special characters")
  }

  password = "";
  if (confirmLowercase === true) {
    password.concat(lower)
  }
  if (confirmUppercase === true) {
    password.concat(upper)
  }
  if(confirmNumber === true) {
    password.concat(number)
  }
  if (confirmSpecial === true) {
    password.concat(character)
  }

  for (var i = 0; i <= promptNumbers; i++) {
    var randomLength = randomFunction[Math.floor(Math.random() * randomFunction.length)]
    passsword = password + randomLength;
  }
console.log(randomLength);


  return password
}
  
// Assignment Code
var generateBtn = document.querySelector("#generate");{
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
