const express = require('express');
const routerV1 = require('./routers/index');

const app = express();

routerV1(app);

app.listen(9090,()=>{
    console.log("Server OK Puerto 9090");
})