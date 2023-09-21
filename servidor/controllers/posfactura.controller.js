import {pool} from "../db.js"

//Se seleccionan todos los registros
export const getAllPosFactura = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM `pos-factura`')
        res.json(rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Se selecciona solo uno
export const getPosFactura1 = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await pool.query('SELECT * FROM `pos-factura` WHERE id_plato = ?', [id])
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

export const createPosFactura = async (req, res) => {
    try {
        const { nombre_plato, cantidad, precio, mesa } = req.body;
        const query = 'INSERT INTO `pos-factura` (nombre_plato, cantidad, precio, mesa, fecha_fact) VALUES (?, ?, ?, ?, NOW())';
        const [rows] = await pool.query(query, [nombre_plato, cantidad, precio, mesa]);
        const id_plato = rows.insertId;
        res.send({
            id_plato,
            nombre_plato,
            cantidad,
            precio,
            mesa,
            fecha_fact: new Date().toISOString(),
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Se actualiza registro
export const updatePosFactura = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_plato, cantidad, precio, mesa, fecha_fact} = req.body;
        const [result] = await pool.query(
            'UPDATE `pos-factura` SET nombre_plato = IFNULL(?, nombre_plato), cantidad = IFNULL(?, cantidad), precio = IFNULL(?, precio), mesa = IFNULL(?, mesa), fecha_fact = IFNULL(?, fecha_fact) WHERE id_plato = ?',
            [nombre_plato || null, cantidad || null, precio || null, mesa || null, fecha_fact || null, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        const [rows] = await pool.query('SELECT * FROM `pos-factura` WHERE id_plato = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Se elimina 1 registro
export const deletePosFactura = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM `pos-factura` WHERE id_plato = ?', [req.params.id])
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
export const deleteAllPosFactura = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM `pos-factura`');
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};