// Import the CryptoJS library
//const CryptoJS = require("crypto-js");

// Define a key and plaintext message
const key = "0123456789abcdef";
const message = "This is a secret message!";

// Encrypt the message using DES
const encrypted = CryptoJS.DES.encrypt(message, key).toString();

// Print the encrypted message
console.log(encrypted);

// Get the encrypt button element
const encryptButton = document.querySelector('#encrypt-button');

// Add an event listener to the encrypt button
encryptButton.addEventListener('click', function() 
{
  // Get the plaintext message and key values from the form
  const message = document.querySelector('#encrypt-input').value;
  const key = document.querySelector('#pKey').value;

  // Encrypt the message using DES
  const encrypted = CryptoJS.DES.encrypt(message, key).toString();

  // Update the encrypted message element with the result
  document.querySelector('#encrypted-message').innerHTML = encrypted;
});



//FOR LATER
// // Get references to the input and output elements
// const plaintextInput = document.getElementById("encrypt-input");
// const keyInput = document.getElementById("pKey");

// // Get a reference to the "Encrypt" button and add an event listener to it
// const encryptButton = document.getElementById("encrypt-button");
// encryptButton.addEventListener("click", () => {
//   // Get the plaintext message and key from the input elements
//   const plaintext = plaintextInput.value;
//   const key = keyInput.value;

//   // Encrypt the message using DES
//   const encrypted = CryptoJS.DES.encrypt(plaintext, key).toString();

//   // Display the encrypted message
//   alert("Encrypted message: " + encrypted);
// });