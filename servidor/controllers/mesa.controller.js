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


export const deleteOrdenPorMesa = async (req, res) => {
    try {
        const id_mesa = parseInt(req.params.id_mesa);
        console.log("Valor de id_mesa recibido:", id_mesa);

        // Realiza una solicitud GET para obtener registros de la mesa correspondiente
        const selectQuery = `
            SELECT id_orden
            FROM orden
            WHERE id_mesa = ?
        `;
        const result = await pool.query(selectQuery, [id_mesa]);

        if (result.length === 0) {
            console.error(`No se encontraron registros para la mesa con id_mesa ${id_mesa}.`);
            return res.status(404).json({ message: 'No encontrado' });
        }

        const id_ordenes = result.map(row => row.id_orden);

        // Procede a eliminar los registros específicos en la tabla "orden"
        const deleteQuery = `
            DELETE FROM orden
            WHERE id_orden IN (?)
        `;
        const deleteResult = await pool.query(deleteQuery, [id_ordenes]);

        if (deleteResult.affectedRows > 0) {
            console.log(`Registros de la mesa con id_mesa ${id_mesa} eliminados correctamente.`);

            // Devuelve la lista de id_ordenes eliminados en la respuesta
            return res.status(200).json({ id_ordenes });
        } else {
            console.error(`No se encontraron registros para la mesa con id_mesa ${id_mesa} para eliminar.`);
            return res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        console.error(`Error al eliminar registros para la mesa con id_mesa ${id_mesa}: ${error.message}`);
        return res.status(500).json({ error: error.message });
    }
};





