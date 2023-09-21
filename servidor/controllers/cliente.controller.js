import {pool} from "../db.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const SECRET = "secreto"

//Se seleccionan todos los registros
export const getCliente = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id_admin, nombre, correo  FROM admin')
        res.json(rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Se selecciona un registro
export const getCliente1 = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id])
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

//Se crea un registro
export const createCliente = async (req, res) => {
    try {
        const { nombre, correo, password, confirmar_password } = req.body;
        if (!password) {
            return res.status(409).send('contraseña requerida.');
        }
        if (!nombre) {
            return res.status(409).send('Nombre de usuario requerido.');
        }
        if (!correo) {
            return res.status(409).send('Correo requerido.');
        }
        if (password !== confirmar_password){
            return res.status(409).send('Las contraseñas deben coincidir.');
    }

// Verificar si ya existe un usuario con el mismo correo y nombre
        const checkExistingUserQuery = 'SELECT * FROM admin WHERE nombre = ? OR correo = ?';
        const checkExistingUserValues = [nombre, correo];
        const [existingUser] = await pool.query(checkExistingUserQuery, checkExistingUserValues);
        if (existingUser.length > 0) {
            return res.status(409).send('Nombre de usuario o correo ya existente.');
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

// Insertar el nuevo cliente en la base de datos
        const insertQuery = 'INSERT INTO admin (nombre, correo, password) VALUES (?, ?, ?)';
        const insertValues = [nombre, correo, hashedPassword];
        const [result] = await pool.query(insertQuery, insertValues);
    res.status(201).json({
            id_admin: result.insertId,
            nombre,
            correo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const traerProducto = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM inventario')
        res.send(rows)
    } catch(error) {
        res.status(500).json({error:error.message})
    }
}

export const createProducto = async (req, res) => {
    try {
        const { nombre_producto, categoria, presentacion, unidad, precio } = req.body;
        if (!nombre_producto) {
            return res.status(409).send('nombre de producto requerido.');
        }
        if (!categoria) {
            return res.status(409).send('categoria requerida.');
        }
        if (!presentacion) {
            return res.status(409).send('presentacion requerida.');
        }
        if (!unidad){
            return res.status(409).send('unidad requerida.');
        }
        if (!precio){
            return res.status(409).send('precio requerido.');
        }

        // Insertar el nuevo cliente en la base de datos
        const insertQuery = 'INSERT INTO inventario (nombre_producto, categoria, presentacion, unidad, precio) VALUES (?, ?, ?, ?, ?)';
        const insertValues = [nombre_producto, categoria, presentacion, unidad, precio];
        const [result] = await pool.query(insertQuery, insertValues);
        res.status(201).json({
            id_producto: result.insertId,
            nombre_producto,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const confirmar = async (req, res) => {
    try {
    const { usuario, password } = req.body;
    const [rows] = await pool.query(
        'SELECT * FROM admin WHERE nombre = ? ', [usuario]
    );
        if (rows.length > 0) {
        const compassword = await bcrypt.compare(password, rows[0].password);
        const accesToken = jwt.sign({id: rows[0].id_admin}, SECRET, {
            expiresIn: "1h",
        });
        if(compassword){
            res.status(200).json(
                accesToken
                );
        }else{
            res.status(400).send("el usuario no existe⭐")
        }
        } else {
            res.status(400).send("El usuario no existe ❤️❤️❤️❤️❤️❤️");
        }
        } catch (error) {
        res.status(500).json({ error: "Error del servidor" });
        }
};

export const deletePlatoCarrito = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM agrega_comida WHERE id_plato = ?', [req.params.id_plato]);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Se actualiza un registro
export const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const {nombre, correo, password} = req.body
        const [result] = await pool.query('UPDATE admin SET nombre = IFNULL(?, nombre), correo = IFNULL(?, correo), password = IFNULL(?, password) WHERE id_cliente = ?', [nombre, correo, password, id])
        if (result.affectedRows === 0) {
            return res.status(404).json({
            message: 'No encontrado'
        });
        }
        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id])
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const actualizarContraseñaCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const {password, confirmarPassword} = req.body
        console.log(id, "id en backend para contraseña")
        console.log(req.body, "bodey de contraseña");

        if (password !== confirmarPassword){
            console.log('Las contraseñas deben coincidir.')
            return res.status(409).send('Las contraseñas deben coincidir.');
            
    }   
        const saltRounds = 10;
        const passwordEncripta = await bcrypt.hash(password, saltRounds);
        const [result] = await pool.query('UPDATE admin SET password = IFNULL(?, password) WHERE id_admin = ?', [passwordEncripta, id])

        if (result.affectedRows === 0) {
            console.log("no encontrado")
            return res.status(404).json({
            message: 'No encontrado'
        });
        }

        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id])

        res.json(rows[0])

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//Se elimina un registro
export const deleteCliente = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM admin WHERE id_admin = ?', [req.params.id])
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