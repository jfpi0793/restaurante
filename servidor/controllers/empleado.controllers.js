import {pool} from "../db.js"

//logica para traer todos los empleados
export const getEmpleados = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM empleado');
    res.json(rows)
}

//logica para obtener empleados por id
export const getEmpleado = async(req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleado WHERE id_empleado = ?', [req.params.id]);
        if (rows.length <= 0) {
            return res.status(404).json({error: 'Empleado no encontrado 😓'});
        }
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({error: 'Error del servidor'});
    }
} 

//logica para crear un empleado
export const createEmpleado = async(req,res) => {
    try {
        const{id_empleado, nombre_empleado, ocupacion, turno} = req.body;
        const query = "INSERT INTO empleado(id_empleado, nombre_empleado, ocupacion, turno) VALUES(?,?,?,?)";
        const values =[id_empleado,nombre_empleado, ocupacion,turno];
        await pool.query(query,values);
        res.status(200).json({
            message: 'Creacion exitosa'
        })
    } catch (error) {
        res.status(500).json({error: 'Error en el server'});
    }
}

//logica para eliminar un empleado
export const deleteEmpleado = async(req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM empleado WHERE id_empleado = ?' ,[req.params.id]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Empleado no encontrado o nulo'
            });
        }
        res.status(200).json({
            message: 'eliminacion exitosa 🎉'
        })
    } catch (error) {
        res.status(500).json({message: 'Error en el server'});
    }
}

//logica para actualizar un empleado
export const updateEmpleado = async(req,res) => {
    
    try {
        const {id} = req.params;
        const{nombre_empleado,ocupacion, turno} = req.body;
        const query = 'UPDATE empleado SET nombre_empleado = ?, ocupacion = ? , turno = ? WHERE id_empleado = ?';
        const values = [nombre_empleado,ocupacion,turno,id];
        const [result] = await pool.query(query,values);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'empleado nulo o inexistente'
            });
        }
        const [rows] = await pool.query('SELECT * FROM empleado WHERE id_empleado = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({message: 'Error en el servidor'});
    }

}
