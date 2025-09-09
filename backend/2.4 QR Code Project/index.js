import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {
      name: "url",
      message: "Enter a URL to generate a QR image: "
    },
  ])
  .then((answers) => {
    const url = answers.url;
    const qr_svg = qr.image(url, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream("qr_code.svg"));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/