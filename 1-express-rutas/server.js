const express = require('express');
const app = express();

app.use(require('./rutas/index'));

app.listen(9090,()=>{
    console.log("Server OK en el 9090");
});