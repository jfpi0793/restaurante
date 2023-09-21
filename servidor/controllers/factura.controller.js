import {pool} from "../db.js"

//Se seleccionan todos los registros
export const getAllFactura = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM factura')
        res.json(rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Se selecciona solo uno
export const getFactura1 = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await pool.query('SELECT * FROM factura WHERE id_plato = ?', [id])
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

export const getFacturaPorMesa = async (req, res) => {
    try {
        const { numeroMesa } = req.params;
        const [rows] = await pool.query('SELECT * FROM factura WHERE mesa = ?', [numeroMesa]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Se crea registro
export const createNew = async (req, res) => {
    try {
        const {nombre_plato, cantidad, precio, mesa} = req.body
        const [rows] = await pool.query('INSERT INTO factura (nombre_plato, cantidad, precio, mesa) VALUES (?, ?, ?, ?)', [nombre_plato, cantidad, precio, mesa])
        res.send({
            id_plato: rows.insertId,
            nombre_plato,
            cantidad,
            precio,
            mesa
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Se actualiza registro
export const updateFactura = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_plato, cantidad, precio, mesa } = req.body;
        const [result] = await pool.query(
            'UPDATE factura SET nombre_plato = IFNULL(?, nombre_plato), cantidad = IFNULL(?, cantidad), precio = IFNULL(?, precio), mesa = IFNULL(?, mesa) WHERE id_plato = ?',
            [nombre_plato, cantidad, precio, mesa, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        const [rows] = await pool.query('SELECT * FROM factura WHERE id_plato = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Se elimina 1 registro
export const delete1 = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM factura WHERE id_plato = ?', [req.params.id])
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
export const deleteAllFactura = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM factura');
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};