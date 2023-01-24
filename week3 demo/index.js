const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/Info', (req, res) => {
    res.send('Site Info');
});

app.get('/Contact', (req, res) => {
  res.send('Contact Us');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});