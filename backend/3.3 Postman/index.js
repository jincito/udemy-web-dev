import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.post('/register', (req, res) => {
  res.sendStatus(201);
})

app.put('/user/jin', (req, res) => {
  res.sendStatus(200);
})

app.patch('user/jin', (req, res) => {
  res.sendStatus(200);
})

app.delete('/user/jin', (req, res) => {
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})