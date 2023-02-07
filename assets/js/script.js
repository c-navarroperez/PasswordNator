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
  // Request password length 
  let passwordLength = prompt('Please enter the length of your password. (10 - 64 characters)');

  // Validate that the user selected a number within the range of accempatble lengths  
  if (passwordLength < 10 || passwordLength > 64 || !passwordLength) {
    // Re-enter the lenght or exit the process
    let lengthTryAgain = confirm('Invalid Response. The password must be between 10 and 64 characters. \n\nPlease try again');
    if (lengthTryAgain) {
      // Re-call the password length prompt
      getPasswordLength();
    } 
    else { // else terminate process
      alert('Thank you for using Password Generator');
      throw 'Program exited by the user.'
    }
  }

  return passwordLength;
}

function getCharacterTypes() {
  // Array to contain a pool of possible characters to generate the passworf from
  var passwordArray = [];

  // Offer the choice of character types and include them to the pool of characters
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
  
  // Validate that the user selected at least one character type
  if (!choiceLowerCased && !choiceUpperCased && !choiceNumericChar && !choiceSpecialChar) {
    // Choose a character option again or exit the process
    let charTypesTryAgain = confirm('Invalid Response. Please select at least one option. \n\nPlease try again');
    if (charTypesTryAgain) {
      // Re-call the password length prompt
      getCharacterTypes();
    } 
    else { // else terminate process 
      alert('Thank you for using Password Generator');
      throw 'Program exited by the user.'
    }
  }

  return passwordArray;
}

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = getPasswordLength();
  let passwordCharacterArray = getCharacterTypes();

  // Return character array & password length
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
  let passwordOptions = getPasswordOptions();
  // Password container
  let password = '';
  // Append randomly selected characters from the array until reaching the chosen password length
  for (let i = 0; i < passwordOptions.length; i++) {
    password += getRandom(passwordOptions.charArray)
  }

  // Generated Password
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