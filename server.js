const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* app.get('/', (req, res) => {
  res.send('Hello World!');
}) */
app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`My First Node App runs on port : ${port}`)
})