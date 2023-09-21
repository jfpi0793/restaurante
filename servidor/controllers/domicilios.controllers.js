import {pool} from '../db.js'

export const createDomicilio = async (req, res) => {
    try {
        const {id_domicilio, nombre_cliente,direccion,nombre_plato, cantidad, precio, hora_entrega} = req.body;
        const [rows] = await pool.query('INSERT INTO domicilio (id_domicilio, nombre_cliente, direccion, nombre_plato, cantidad, precio, hora_entrega) VALUES(?,?,?,?,?,?,?)',[id_domicilio, nombre_cliente, direccion, nombre_plato, cantidad,precio, hora_entrega]);
        res.send({
            id_domicilio: rows.insertId,
            nombre_cliente,
            direccion,
            nombre_plato,
            cantidad, 
            precio,
            hora_entrega,
        })
    } catch (error) {
        res.status(500).json({ error: error.message });   
    }
}

//logica para obtener todos los domicilios

export const getDomicilios = async(req,res) => {
    try {
        const [rows] = await pool.query('SELECT nombre_cliente, direccion, hora_entrega FROM `domicilio` GROUP BY direccion ORDER BY hora_entrega')
        res.json(rows)
    } catch (error) {
        res.status(500).json({error: 'Error Interno'})
    }
}

export const getDomicilio = async (req, res) => {
    try {
        const { di } = req.params;
        const [rows] = await pool.query('SELECT nombre_plato, nombre_cliente, SUM(precio) AS precio, direccion, SUM(cantidad) AS cantidad FROM domicilio WHERE direccion = ? GROUP BY nombre_plato', [di]);
            res.send(rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//eliminar domicilio

export const deleteDomicilio = async(req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM domicilios WHERE id_domicilio = ?', [req.params.id]);       
        if (result.affectedRows <= 0) {
            return res.status(404).json({message: 'El domicilio no se encuentra 😓'});
        }
        res.status(200).json({message: 'domicilio eliminado ✅'});
    } catch (error) {
        res.status(500).json({message: 'Error Interno'});
    }
}

//logica para actualizar un domicilio

export const updateDomicilio = async(req,res) => {
    try {
        const {id} =req.params;
        const {nombre_cliente,direccion} = req.body;
        const query = 'UPDATE domicilios SET nombre_cliente = ?, direccion = ?  WHERE id_domicilio = ?';
        const values = [nombre_cliente,direccion,id];
        const [result] = await pool.query(query,values);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Elemento no existente'});
        }
        const [rows] = await pool.query('SELECT * FROM domicilios WHERE id_domicilio = ?' , [id]);
        res.status(200).json({message: 'Domicilio actualizado'});
        //res.json(rows[0])
    } catch (error) {
        res.status(500).json({message: 'Error Interno'});
    }
}