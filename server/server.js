const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;
const root = path.join(__dirname, '/..');

app.use(express.static(root));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log('listening on port', port);
});

module.exports = app;
