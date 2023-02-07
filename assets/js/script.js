// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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


function getPasswordLength() {
  // using prompt() request password length --> returns user input value as string
  // Length of password : At least 10 characters but no more than 64.
  let passwordLength = prompt('Please enter the length of your password. (10 - 64 characters)');
  // validate that the user selected a number within the range of accempatble lengths  
  if (passwordLength < 10 || passwordLength > 64 || !passwordLength) {
    let lengthTryAgain = confirm('Invalid Response. The password must be between 10 and 64 characters. \n\nPlease try again');
    // else send user back to select again - call a password length function ???
    if (lengthTryAgain) {
      getPasswordLength();
    } else {
      alert('Thank you for using Password Generator');
      return null;
    }
  }

  return passwordLength;
}

function getCharacterTypes() {
  var passwordArray = [];
  // using confirm() decide the use of character types --> returns a boolean value
  // Include Lowercase
  let choiceLowerCased = confirm("Would you like your password to contain lowercase letters?"); 
  if (choiceLowerCased) passwordArray = passwordArray.concat(lowerCasedCharacters);
  // Include Uppercase
  let choiceUpperCased = confirm("Would you like your password to contain UPPERCASE letters?");
  if (choiceUpperCased) passwordArray = passwordArray.concat(upperCasedCharacters);
  // Include Numeric
  let choiceNumericChar = confirm("Would you like your password to contain numb3rs?");
  if (choiceNumericChar) passwordArray = passwordArray.concat(numericCharacters);
  // Include Special characters
  let choiceSpecialChar = confirm("Would you like your password to contain $peci@l characters?");
  if (choiceSpecialChar) passwordArray = passwordArray.concat(specialCharacters)
  
  // validate that the user selected at least one character type
  if (!choiceLowerCased && !choiceUpperCased && !choiceNumericChar && !choiceSpecialChar) {
    let charTypesTryAgain = confirm('Invalid Response. Please select at least one option. \n\nPlease try again');
    // else send user back to select again - call a character type function ???
    if (charTypesTryAgain) {
      getCharacterTypes();
    } else {
      alert('Thank you for using Password Generator');
      return null;
    }
  }

  return passwordArray;
}

// Function to prompt user for password options
function getPasswordOptions() {

  let passwordLength = getPasswordLength();
  if (!passwordLength) return;

  let passwordCharacterArray = getCharacterTypes();
  if (!passwordCharacterArray) return;

  // return selected character & password length
  return {
    length: passwordLength, 
    charArray: passwordCharacterArray
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomChar = arr[Math.floor(Math.random() * (arr.length))];

  return randomChar;
}

// Function to generate password with user input
function generatePassword() {
  // call getPasswordOptions and store that return in a variable
  let passwordOptions = getPasswordOptions();
  // create a string to hold the generated password
  let password = '';
  // for every character of the chosen password length
  for (let i = 0; i < passwordOptions.length; i++) {
    // get a randomly selected item from the array of character choices
    password += getRandom(passwordOptions.charArray)
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);