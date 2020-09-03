const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(function(req, res) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.use(function(req, res) {
  res.status(500).send('500 - INTERNAL ERROR');
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
