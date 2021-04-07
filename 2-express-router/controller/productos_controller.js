
const data =[
    {
         id: 123,
         categoria: "Polo",
         producto:"Polo Rambo"
    }, 
    {
         id: 124,
         nombre: "Polo",
         producto: "Polo"
    }
]
 
/* -------------------------------------------------------------------------- */
/*                              Listar Productos                             */
/* -------------------------------------------------------------------------- */

function listar(req,res) {
     res.json({
          data:data
     })     
}

/* -------------------------------------------------------------------------- */
/*                              Guardar Productos                             */
/* -------------------------------------------------------------------------- */

function guardar(req,res) {
     res.json({
          message:"Guardado"
     })
}

/* -------------------------------------------------------------------------- */
/*                              Borrar Productos                              */
/* -------------------------------------------------------------------------- */

function borrar(req,res) {
     res.json({
          message:"Eliminado"
     })
}

/* -------------------------------------------------------------------------- */
/*                            Actualizar Productos                            */
/* -------------------------------------------------------------------------- */

function update(req,res) {
     res.json({
          message:"Actualizado"
     })
}

module.exports = {
     listar,
     guardar,
     borrar,
     update
}