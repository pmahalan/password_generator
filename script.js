var bigletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var littleletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var combos = [];
// Above are your arrays. One array for each type of character, and then an array containing those arrays.

function passwordOptions(){
  var numChar = prompt("How many characters do you want in your password?")
  console.log(numChar)

var lowerChar = confirm("Do you want lowercase characters?")
var upperChar = confirm("Do you want uppercase characters?")
var specialChar = confirm("Do you want special characters?")
var num = confirm("Do you want numbers?")

  if (numChar <8){
    alert("The minimum is 8 characters, try again!")
  }
  if(isNaN(numChar) === true){
    alert("please read the instructions")
  }
  console.log(numChar)

if (
  lowerChar === false &&
  upperChar === false &&
  specialChar === false &&
  num === false
) {
  alert("Must select at least one character type!!!");
  return;
}

var passwordOptions = {
  length: numChar,
  lowerChar: lowerChar,
  upperChar: upperChar,
  specialChar: specialChar,
  num: num
}
return passwordOptions;
}

function getRandom (array){
  var randomIndex = Math.floor(Math.random() * array.length);
  let randomElement = array[randomIndex]

  return randomElement;
}


function generatePassword () {
  let options = passwordOptions()
  dynamic = []
  possiblecharacters = []
  guaranteedcharacters = []

  if (options.lowerChar){
    possiblecharacters = possiblecharacters.concat(littleletters)
    guaranteedcharacters.push(getRandom(littleletters))
  }
  if (options.upperChar){
    possiblecharacters = possiblecharacters.concat(bigletters)
    guaranteedcharacters.push(getRandom(bigletters))
  }
  if (options.specialChar){
    possiblecharacters = possiblecharacters.concat(specialcharacters)
    guaranteedcharacters.push(getRandom(specialcharacters))
  }
  if (options.num){
    possiblecharacters = possiblecharacters.concat(numbers)
    guaranteedcharacters.push(getRandom(numbers))
  }

for (i=0; i<options.length; i++) {
  var possiblecharacters = getRandom(possiblecharacters);
  dynamic.push(possiblecharacters);
}

for (i=0; i < guaranteedcharacters.length; i++) {
  dynamic[i] = guaranteedcharacters[i];
}

return dynamic.join('')
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
 
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);