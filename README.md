# What is it?
## This project allows the user to encrypt or decrypt a plaintext/string utilizing DES and AES as private key schemes, and RSA for a public key scheme.

# How to use:
## The user simply selects what type of encryption algorithm they would like to use on the right side of the "Supported Encryptions" tab. Once selected the user can enter their plaintext or string that they would like to encrypt in the encrypt box, from there select which mode of operations you would like to use, as well as a key. Click the encrypt button and the output should display on the decrypt box, in order to decrypt, place the encrypted output in the decrypt box and click decrypt and it should display on the encrypt box.

# Troubleshooting:
## We initailly created all our code in C++ but had a difficult time implementing the code with our HTML and JS. So we tried a new approach with Python and Flask to compile and return the output to the JS that then passes it to the HTML. So, we created a new DES and AES file in Python, but were again unsucessful in importing the results to the JS. So after everything we relied on JS and used a Crypto library called CryptoJS to help with our implementation for the project.

# Group Members
## Tony Rojas , Raul Mendy , Ethan Prendergast

# Gif
![](https://github.com/ep626/CIS-Prooject/blob/main/Animation.gif)
