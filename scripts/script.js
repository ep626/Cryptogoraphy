// Import the CryptoJS library
const CryptoJS = require("crypto-js");

// Define a key and plaintext message
const key = "0123456789abcdef";
const message = "This is a secret message!";

// Encrypt the message using DES
const encrypted = CryptoJS.DES.encrypt(message, key).toString();

// Print the encrypted message
console.log(encrypted);
