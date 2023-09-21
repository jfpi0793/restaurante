import express from "express";
import router from "./rutas/rutaPrincipal.js";
import cors from "cors"
import { dirname } from "path";
import { fileURLToPath } from "url";
import * as path from 'path'

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));


app.use(express.json())

app.use('/api', router)

app.listen(3002, ()=> {
    console.log("server running on port 3002 ❤️❤️");
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, './uploads')))