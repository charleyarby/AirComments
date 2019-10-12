// Importing express framework, body-parser for post requests
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Set PORT# to listen on
const PORT = 4000;

// Create server
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Eventually there will be get and post request handlers here!

// listen on port
app.listen(PORT, console.log('Listening on port', PORT));