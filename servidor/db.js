import {createPool} from "mysql2/promise"

//conexion 
export const pool = createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'restaurante',
})

