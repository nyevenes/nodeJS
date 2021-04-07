const express = require('express');
const app = express();

const data =[
    {
         id: 123,
         usuario: "user1"
    }, 
    {
         id: 124,
         usuario: "user2"
    }
]
 

/* -------------------------------------------------------------------------- */
/*                              Listar Usuarios                             */
/* -------------------------------------------------------------------------- */

app.get('/usuario',(req,res)=>{
     res.json({
          data:data
     })
})

/* -------------------------------------------------------------------------- */
/*                              Guardar Usuarios                             */
/* -------------------------------------------------------------------------- */

app.post('/usuario',(req,res)=>{
     res.json({
          message:"Guardado"
     })
})

/* -------------------------------------------------------------------------- */
/*                              Borrar Usuarios                              */
/* -------------------------------------------------------------------------- */

app.delete('/usuario/:id',(req,res)=>{
     res.json({
          message:"Eliminado"
     })
})

/* -------------------------------------------------------------------------- */
/*                            Actualizar Usuarios                            */
/* -------------------------------------------------------------------------- */

app.put('/usuario/:id',(req,res)=>{
     res.json({
          message:"Actualizado"
     })
})

module.exports = app;