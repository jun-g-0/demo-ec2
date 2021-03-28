const express = require('express');

const app = express();

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(9000, () => {
  console.log(`App listening on port 9000!`);
  console.log(`http://localhost:9000`);
});
