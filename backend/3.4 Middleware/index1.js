import express, { response } from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (request, response) => {
  response.sendStatus(201);
  console.log(request.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
