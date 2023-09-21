import {pool} from "../db.js"
import moment from "moment-timezone";

moment.tz.setDefault('America/Bogota'); 

//Se seleccionan todos los registros
export const getAllRegistros = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM registros_fact ORDER BY fecha_factura DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Se selecciona solo uno
export const getRegistro = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await pool.query('SELECT * FROM registros_fact WHERE id_num_orden = ?', [id])
        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createNew = async (req, res) => {
    try {
        const { id_mesa, productos, fecha_factura } = req.body;

        const insertIds = [];

        for (const productoData of productos) {
            const { producto, cantidad, precio } = productoData;
            
            const fechaFactura = moment(fecha_factura, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
            console.log("Fecha recibida en el backend:", fechaFactura);
            
            const [rows] = await pool.query('INSERT INTO registros_fact (id_mesa, producto, cantidad, precio, fecha_factura) VALUES (?, ?, ?, ?, ?)', [id_mesa, producto, cantidad, precio, fechaFactura]);
            const lastInsertedId = rows.insertId;
            insertIds.push(rows.insertId);
        }

        res.send({
            insertIds: insertIds,
            id_mesa: id_mesa,
            productos: productos,
            fecha_factura: fecha_factura,
            lastInsertedId: lastInsertedId
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



//Se actualiza registro
export const updateRegistro = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_mesa, producto, cantidad, precio } = req.body;
        const [result] = await pool.query(
            'UPDATE registros_fact SET id_mesa = IFNULL(?, id_mesa), producto = IFNULL(?, producto) cantidad = IFNULL(?, cantidad), precio = IFNULL(?, precio), WHERE id_num_orden = ?',
            [id_mesa, producto, cantidad, precio, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        const [rows] = await pool.query('SELECT * FROM registros_fact WHERE id_num_orden= ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Se elimina 1 registro
export const delete1 = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM registros_fact WHERE id_num_orden= ?', [req.params.id])
        if (result.affectedRows <= 0) {
            return res.status(404).json({
            message: 'No encontrado'
            });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Se eliminan todos los registros
export const deleteAllRegistro = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM registros_fact');
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRegistrosPorMesaYFecha = async (req, res) => {
    try {
        const { mesa, fecha } = req.params;
        let query = 'SELECT * FROM registros_fact WHERE id_mesa = ?';
        const params = [mesa];
        if (fecha) {
            query += ' AND DATE(fecha_factura) = ?';
            params.push(moment(fecha).format('YYYY-MM-DD'));
        }
        const [rows] = await pool.query(query, params);
        res.json(rows);
    } catch (error) {
        console.error("Error al filtrar por mesa y fecha:", error);
        res.status(500).json({ error: error.message });
    }
};


export const getRegistrosPorMesa = async (req, res) => {
    try {
        const { mesa } = req.params;
        const idMesa = parseInt(mesa, 10);
        if (isNaN(idMesa)) {
            return res.status(400).json({ error: "La mesa debe ser un número válido" });
        }
        console.log("Mesa recibida:", idMesa);
        const [rows] = await pool.query('SELECT * FROM registros_fact WHERE id_mesa = ? ORDER BY fecha_factura DESC', [idMesa]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getRegistrosPorFecha = async (req, res) => {
    try {
        const { fecha } = req.params;
        const formattedFecha = moment(fecha).format('YYYY-MM-DD');
        const [rows] = await pool.query('SELECT * FROM registros_fact WHERE DATE(fecha_factura) = ? ORDER BY fecha_factura DESC', [formattedFecha]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerUltimoId = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT MAX(id_num_orden) AS ultimoId FROM registros_fact');
        const ultimoId = rows[0].ultimoId;
        res.json(ultimoId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};