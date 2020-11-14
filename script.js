// Character choices

var letters = 'ABCDEFGHIJKLMNOPQRSTUVWYX' + 'abcdefghijklmnopqrctuvwyz' ; 
    numbers = '1234567890';
    characters = '!@#$%^&*(/.,<>?=+-_'

































// Button Listener
document.getElementById("redbutton").addEventListener("click", function() {
    // Prompt User for parameters for password
    var length = prompt("How many characters would you like your password to be (between 8 to 40 characters");
    var upper = confirm("Upper case letters?");
    var lower = confirm("Lower case letters?");
    var special = confirm("Special Characters?");
})

// Generate new password
function newPassword() {
    var password = '';

}

// Apprend new password to textarea
function writePassword() {

}