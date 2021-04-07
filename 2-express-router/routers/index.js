const categoriaRouter = require('../routers/categorias_router');
const productoRouter = require('../routers/producto_router');
const usuarioRouter = require('../routers/usuario_router');

module.exports = (app) =>{
    app.use('/api/v1',categoriaRouter);
    app.use('/api/v1',productoRouter);
    app.use('/api/v1',usuarioRouter);
}