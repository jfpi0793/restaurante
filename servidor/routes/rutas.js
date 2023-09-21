import { Router } from "express";
import { createUser } from "../controller/routes.controller.js";

const router = Router()

//ruta para crear un usuario
router.post('/create', createUser)

export default router