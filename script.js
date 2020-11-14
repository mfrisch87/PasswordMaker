// Character choices

var characters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  // Array of numeric characters to be included in password
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Array of lowercase characters to be included in password
  var lowerLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  // Array of uppercase characters to be included in password
  var upperLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
var finalPassword = [];
var passwordCriteria = [];


var guaranteedCharacters = [];


// Button Listener
document.getElementById("redbutton").addEventListener("click", function() {
    // Prompt User for parameters for password
    var length = prompt("How many characters would you like your password to be (between 8 to 40 characters");
   while (length >= 40 ||  length <= 8) {
        if (length >= 40 ||  length <= 8) {
        alert ("Pick a value between 8 and 40");
        length = prompt("How many characters would you like your password to be (between 8 to 40 characters");
    }};
    var upper = confirm("Upper case letters?");
    if (upper === true) {
       passwordCriteria = passwordCriteria.concat(upperLetters);
       var randomChar = upperLetters[Math.floor((Math.random() * upperLetters.length))];
       guaranteedCharacters = guaranteedCharacters.concat(randomChar);
       length--;
    }

    var lower = confirm("Lower case letters?");
    if (lower === true) {
        passwordCriteria = passwordCriteria.concat(lowerLetters) ;
        var randomChar = lowerLetters[Math.floor((Math.random() * lowerLetters.length))];
       guaranteedCharacters = guaranteedCharacters.concat(randomChar);
       length--;
    }
    var number = confirm("Numbers?");
    if (number === true) {
        passwordCriteria = passwordCriteria.concat(numbers);
        var randomChar = numbers[Math.floor((Math.random() * numbers.length))];
       guaranteedCharacters = guaranteedCharacters.concat(randomChar);
       length--;
       console.log(randomChar);
    }
    var special = confirm("Special Characters?");
    if (special === true) {
        passwordCriteria = passwordCriteria.concat(characters);
        var randomChar = characters[Math.floor((Math.random() * characters.length))];
       guaranteedCharacters = guaranteedCharacters.concat(randomChar);
       length--;
    }
    finalPassword = finalPassword.concat(guaranteedCharacters);
for (var i=0; i < length; i++) {
 var selctedCharacter =  passwordCriteria[Math.floor((Math.random() * passwordCriteria.length))];
finalPassword = finalPassword.concat(selctedCharacter);
 //console.log(selctedCharacter);
}
//console.log(passwordCriteria.length);
   
   console.log(finalPassword);
})

// Generate new password
function newPassword() {

}

// Apprend new password to textarea
function writePassword() {

}