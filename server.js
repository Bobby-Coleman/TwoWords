const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');


app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//mount API routes here
app.use('/api/users', require('./routes/api/users'))
app.use(require('./middleware/auth'));
app.use('/api/entries', require('./routes/api/entries'))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});