const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

require('./middlewares')(app);
require('./routes')(app);

app.listen(PORT);

module.exports = app;