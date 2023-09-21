import React ,{useState, useEffect}from "react";
import { Container, Container2, Box3, Box, Box2 } from "./styled";
import Axios from "axios";
import { useAuthContext} from "../context/AuthContext"

export const Inventario = () => {
const {token} = useAuthContext()
const [inventario,setInventario] = useState([])
const Buscar = () => {
Axios.get("http://localhost:3002/api/traerproducto",{
    headers: {
        Authorization:token
    }
}).then((response)=>{
    setInventario(response.data)
})
.catch(error => {
})
}
useEffect(()=>{
Buscar()
},[])

return (
<>
    <Container>
        <Container2>
            <Box3>
                <Box>Nombre</Box>
                <Box>Presentacion</Box>
                <Box>Categoria</Box>
                <Box>Unidad</Box>
                <Box>Precio</Box>
            </Box3>
            {inventario.map((p, index) => (
            <Box3 key={index}>
                <Box2>{p.nombre_producto}</Box2>
                <Box2>{p.presentacion}</Box2>
                <Box2>{p.categoria}</Box2>
                <Box2>{p.unidad}</Box2>
                <Box2>{p.precio}</Box2>
            </Box3>
            ))}
        </Container2>
    </Container>
</>
);
};
