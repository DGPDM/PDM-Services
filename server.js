const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.get('/debug', (req, res) => {
  res.send('Debug from App Engine!');
});



app.get('/names', (req, res) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});