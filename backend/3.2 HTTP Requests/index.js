import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact: hello@gmail.com</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>this is <s>a</s> not a sign.</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
