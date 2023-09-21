import { pool } from "../db.js";

export const getMesa = async (req, res) => {
    try {
        const id_mesa = parseInt(req.params.id)
        const query = `
            SELECT * FROM orden
            WHERE id_mesa = ?
        `;
        const [rows] = await pool.query(query, [id_mesa]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createMesa = async (req, res) => {
    try {
        const { numeroMesa, productos } = req.body;
        if (!productos || productos.length === 0) {
        res.status(400).json({ error: "No se han seleccionado productos." });
        return;
        }
        for (const producto of productos) {
            const { nombre, cantidad, precio } = producto;
            await pool.query(
            'INSERT INTO orden (id_mesa, producto, cantidad, precio) VALUES (?, ?, ?, ?)',
            [numeroMesa, nombre, cantidad, precio]
        );
        };
        res.status(200).json({ id_mesa: numeroMesa });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteOrdenPorId = async (req, res) => {
    const id_orden = parseInt(req.params.id_orden);
    console.log("Valor de id_orden recibido:", id_orden);
        try {
            const deleteQuery = `
            DELETE FROM orden
            WHERE id_orden = ?
            `;
    const result = await pool.query(deleteQuery, [id_orden]);
        if (result.affectedRows > 0) {
        console.log(`Orden con id_orden ${id_orden} eliminada correctamente.`);
        res.status(204).send();
        } else {
        console.error(`No se encontraron registros con id_orden ${id_orden} para eliminar.`);
        res.status(404).send();
        }
        } catch (error) {
        console.error(`Error al eliminar la orden con id_orden ${id_orden}: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};
