//set of functions
//var randomFunction = {
  //lower : getRandomLower,
  //upper : getRandomUpper,
  //number : getRandomNumber,
  //character : getRandomCharacter,

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","Y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var symbol = ["~","!","@","#","$","%","^","&","*","(",")","?"]

//generate random lowercase
function getRandomLower() {
  var index = Math.floor(Math.random() * lower.length);
  var randomElem = lower[index];
  return randomElem;
}

console.log(getRandomLower());

//generate random uppercase
function getRandomUpper() {
  var index = Math.floor(Math.random() * upper.length);
  var randomElem = upper[index];
  return randomElem;
}
console.log(getRandomUpper());

//generate random number
function getRandomNumber() {
  var index = Math.floor(Math.random() * number.length);
  var randomElem = number[index];
  return randomElem;
}
  console.log(getRandomNumber());

//generate random character
function getRandomSymbol() {
  var index = Math.floor(Math.random() * symbol.length);
  var randomElem = symbol[index];
  return randomElem;
}
  console.log(getRandomSymbol());

//set number of characters


function generatePassword(lower, upper, number, symbol, length){
  //create prompts
  var promptNumbers = prompt("Choose a number of character between 8 and 128")
  if (promptNumbers >= 8 && promptNumbers <= 128){
    alert ("You want " + promptNumbers + " letters")
  }
  else { alert ("Please choose between 8 and 128");
  return
  }
  //change string "promptNumbers" to a value
  var length = +promptNumbers;

  console.log(length)
  console.log(typeof length);

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

  var password = [];
  if (confirmLowercase === true) {
    password.push(getRandomLower);
  }
  if (confirmUppercase === true) {
    password.push(getRandomUpper);
  }
  if(confirmNumber === true) {
    password.push(getRandomNumber);
  }
  if (confirmSpecial === true) {
    password.push(getRandomSymbol);
  }

  for (var i = 0; i <= length.length; i++) {
    var randomLength = randomFunction[Math.floor(Math.random() * randomFunction.length)]
    passsword = password + randomLength;
  }
console.log(password);


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
