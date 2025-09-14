//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
// import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthenticated = false;

app.use(express.urlencoded({ extended: true }));

function passwordCheck(request, response, next) {
  const password = request.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthenticated = true;
  }
  next();
}
app.use(passwordCheck);

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html")
});

app.post("/check", (request, response) => {
  if (userIsAuthenticated) {
    response.sendFile(__dirname + "/public/secret.html");
  } else {
    response.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});