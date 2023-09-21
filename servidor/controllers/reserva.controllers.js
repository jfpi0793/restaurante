import {pool} from "../db.js"

export const getReservas = async(req, res) => {
    const [rows] = await pool.query("SELECT * FROM reserva")
    res.json(rows)
}

export const getReserva = async(req,res)=> {
    try {
        const [rows] = await pool.query('SELECT * FROM reserva WHERE id_reserva = ?' , [req.params.id]);
        if (rows.length <= 0) {
            return res.status(404).json({error: 'Ups reserva no encontrada 😓'})
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({error: 'Error en el server ❌'})
    }
}

//logica para insertar una nueva reserva 
export const createReservation = async (req,res)=> {
    try {
        const {id_reserva, mesa,id_cliente, hora_reserva} = req.body;
        const query = "INSERT INTO reserva (id_reserva, mesa, id_cliente, hora_reserva) VALUES(?,?,?,?)";
        const values = [id_reserva, mesa,id_cliente, hora_reserva];
        await pool.query(query, values);
        res.status(200).json({
            message: "Creacion exitosa 🎉"
        });
    } catch (error) {
        res.status(500).json({error:'Error en el server'});
        
    }
}

//logica para eliminar una reserva 
export const deleteReservation = async(req,res)=> {
    try {
        const [result] = await pool.query('DELETE FROM reserva WHERE id_reserva = ? ' ,[req.params.id]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Reserva no existente o nula ❌'
            });
        }
        res.status(200).json({
            message: 'Reserva eliminada correctamente 🎉'
        });
    } catch (error) {
        res.status(500).json({message:"Error de servidor"});
    }
}

//logica para actualizar una reserva
export const updateReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const { mesa, hora_reserva } = req.body;
        const query = "UPDATE reserva SET mesa = ? , hora_reserva= ? WHERE id_reserva = ?";
        const values = [mesa,hora_reserva, id];
        const [result]= await pool.query(query, values);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Reserva no encontrada ❌'
            });
        }
        const [rows] = await pool.query('SELECT * FROM reserva WHERE id_reserva = ?', [id])
        res.json(rows[0]);
        
    } catch (error) {
        
        res.status(500).json({ message: "Error en el server" });
    }
};