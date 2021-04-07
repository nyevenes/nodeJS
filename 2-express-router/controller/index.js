const express = require('express');
const app = express();

app.use( require('./categorias_controller'));
app.use( require('./usuarios_controller'));
app.use( require('./productos_controller'));

module.exports = app;