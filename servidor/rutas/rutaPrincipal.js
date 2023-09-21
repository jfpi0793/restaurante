import { Router } from "express";
import { getCliente, getCliente1, createCliente, updateCliente, deleteCliente, confirmar, deletePlatoCarrito, createProducto, traerProducto, actualizarContraseñaCliente } from "../controllers/cliente.controller.js";
import { getEmpleado,getEmpleados,createEmpleado,deleteEmpleado,updateEmpleado } from "../controllers/empleado.controllers.js";
import {getPedidos,getPedido,createPedido,deletePedido,updatePedido} from "../controllers/pedido.controllers.js";
import { createPlato,createBebida, deletePlato,updatePlato, obtenerPlato, Compra, agregarPedido, Bebidas, obtenerBebida, PlatosSancocho, PlatosCorriente, informacion, deleteBebida, updateImagePlato,traerPlatos,updateImagebebida, updateBebida } from "../controllers/platos.controllers.js";
import { getReserva,getReservas,createReservation,deleteReservation,updateReservation } from "../controllers/reserva.controllers.js";
import { createDomicilio,getDomicilios,getDomicilio, deleteDomicilio, updateDomicilio } from "../controllers/domicilios.controllers.js";
import { getMesa, createMesa, deleteOrdenPorId } from "../controllers/mesa.controller.js";
import multer from 'multer';
import {dirname, extname, join} from 'path';
import { fileURLToPath } from "url";
import express from "express";
import jwt from 'jsonwebtoken';
import { getAllRegistros, getRegistro, createNew, updateRegistro, delete1, deleteAllRegistro, getRegistrosPorFecha, getRegistrosPorMesaYFecha, getRegistrosPorMesa,obtenerUltimoId } from "../controllers/factura_reg.controllers.js"
import { getAllPlatos } from "../controllers/platos.controllers.js";

const SECRET = "secreto"

function verificarToken(req, res, next){
    const token = req.headers.authorization;
    if (!token){
        return res.status(401).json({mensaje: "Acceso no autorizado: Se necesita un Token "})
    }
    jwt.verify(token, SECRET, (error, usuario) => {
        if (error) {
            return res.status(401).json({mensaje: "Acceso no autorizado: Token no válido."});
            
        }
        req.usuario = usuario;
        next();
    });
}

const router = Router();

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

const upload = multer({
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR,'../uploads'),
        filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            cb(null, `${fileName}-${Date.now()}${fileExtension}`);
        }
    })
    ,
    limits: {
        fieldSize: 10000000
    }
});

const expressApp = express();

//Tabla cliente

router.get('/cliente', getCliente) //Ruta para obtener todos
router.get('/cliente/:id', getCliente1) //Ruta para obtener uno
router.post('/createcliente', verificarToken, createCliente) //Ruta para crear uno
router.put('/actualizarcontrasena/:id', verificarToken, actualizarContraseñaCliente)
router.post('/login', confirmar)
router.patch('/cliente/:id', updateCliente) //Ruta para actualizar
router.delete('/cliente/:id', deleteCliente) //Ruta para eliminar uno

//tabla inventario producto.

router.get('/traerproducto',verificarToken, traerProducto)
router.post('/createproducto', verificarToken, createProducto)

//Tabla empleado

router.get('/empleados',getEmpleados);//ruta para obtener todos los empleados
router.get('/empleado/:id', getEmpleado);//ruta para obtener un empleado por id
router.post('/creacion',createEmpleado);//ruta para crear un empleado
router.delete('/eliminar/:id',deleteEmpleado);//ruta para eliminar un empleado
router.patch('/actualizar/:id', updateEmpleado);//ruta para actualizar empleado
router.delete('/eliminarbebida/:id', deleteBebida)

//Tabla pedido

router.get('/pedidos', getPedidos);//ruta para traer todas los pedidos
router.get('/pedido/:id', getPedido);//ruta para traer un pedido por id
router.post('/create', createPedido);//ruta para crear un pedido
router.patch('/actualizacion/:id', updatePedido);//ruta para actualizar un pedido
router.delete('/eliminacion/:id', deletePedido);//ruta para eliminar un pedido

//Tabla plato

router.post('/crearplato', upload.single("imagen"), async (req, res) => {
    try {
        const { nombre_plato, descripcion, precio, tipo_plato } = req.body;
        const imagen = req.file.filename;
        const result = await createPlato(nombre_plato, descripcion, precio, imagen, tipo_plato);
        res.status(200).json({
            message: 'Creación exitosa 🎉',
            result
        });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

router.get('/allPlatos', getAllPlatos)

expressApp.use('/public', express.static(join(CURRENT_DIR,'../uploads')))

router.post('/agregarpedido', agregarPedido)
router.put('/actualiza/:id', verificarToken, updatePlato);//ruta para actualizar un plato
router.put('/updateBebida/:id', verificarToken, updateBebida)
router.delete('/elimina/:id', deletePlato)//ruta para eliminar un plato 
router.get('/platosSancocho', PlatosSancocho)//mapeo plato sancocho
router.get('/platosCorriente', PlatosCorriente)//mapeo plato corriente
router.get('/bebidas', Bebidas)
router.get('/bebidas',verificarToken, Bebidas)
router.get('/plato/:id',obtenerPlato)
router.get('/bebida/:id', obtenerBebida)
router.get('/compras',Compra)
router.delete('/agrega_comida/:id_plato', deletePlatoCarrito)

//informacion

router.get('/informacion', informacion)

//Tabla reserva

router.get('/reservaciones', getReservas);//ruta para traer todas las reservas
router.get('/reservacion/:id', getReserva);//ruta para traer una reservacion por id
router.post('/crea', createReservation);//ruta para crear una reservacion 
router.delete('/delete/:id', deleteReservation);//ruta para eliminar una reservacion
router.patch('/update/:id', updateReservation);//ruta para actualizar una reservacion

//Tabla de domicilios

router.get('/platos', verificarToken,  traerPlatos)
router.post('/domicilio', createDomicilio); //ruta para crear domicilios
router.get('/domicilios', getDomicilios); //ruta para obtener todos los domicilios
router.get('/domicilio/:di', getDomicilio); //ruta para obtener un domicilio por id
router.delete('/quitar/:id', deleteDomicilio); //ruta para eliminar domicilio
router.patch('/modificar/:id', updateDomicilio); //ruta para actualizar un domicilio

router.get('/mesa/:id', getMesa);
router.post('/crear-mesa', createMesa)
router.delete('/orden_id/:id_orden', deleteOrdenPorId);

router.get('/registro', getAllRegistros)
router.get('/registro/:id', getRegistro)
router.get('/registro/por-mesa/:mesa', getRegistrosPorMesa)
router.get('/registro/por-fecha/:fecha', getRegistrosPorFecha);
router.get("/registro/por-mesa-y-fecha/:mesa/:fecha", getRegistrosPorMesaYFecha);
router.get('/ultimo-id', obtenerUltimoId);
router.post('/registro', createNew)
router.patch('/registro/:id', updateRegistro)
router.delete('/registro/:id', delete1)
router.delete('/delete', deleteAllRegistro)

router.post('/crearbebida', verificarToken, upload.single("imagen"), async (req, res) => {
    try {  
        const { nombre_bebida, descripcion, precio, colores } = req.body;
        const imagen = req.file.filename;
        // Llamar a la función createPlato con los datos y la ruta de la imagen
        const result = await createBebida(nombre_bebida, descripcion, precio, imagen, colores);
        res.status(200).json({
            message: 'Creación exitosa 🎉',
            result
        });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

router.put('/actualizarImgPlato/:id', verificarToken, upload.single("imagen"), async (req, res) => {
    try {
        const {id} = req.params;
        const imagen = req.file.filename;
        // Llamar a la función createPlato con los datos y la ruta de la imagen
        const result = await updateImagePlato( imagen, id);
        res.status(200).json({
            message: 'Creación exitosa 🎉',
            result
        });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

router.put('/actualizarImgbebida/:id', verificarToken, upload.single("imagen"), async (req, res) => {
    try {
        const {id} = req.params;
        const imagen = req.file.filename;
        console.log(imagen, "img bebida en ruta")
        console.log(id, "id en ruta img bebida")
        // Llamar a la función createPlato con los datos y la ruta de la imagen
        const result = await updateImagebebida( imagen, id);
        res.status(200).json({
            message: 'Creación exitosa 🎉',
            result
        });
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

export default router
