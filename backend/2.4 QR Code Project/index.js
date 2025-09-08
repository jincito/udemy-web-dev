/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt("Enter a URL to generate a QR image: ")
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFile("URL.txt", answers, (err) => {
      if (err) throw err;
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
