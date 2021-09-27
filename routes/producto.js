//Rutas para producto
const express = require('express');
const router = express.Router();
const poductoController = require('../controllers/productoController')

//api/productos
router.post('/', poductoControlle.crearProducto);

module.exports = router;
