import React, { useEffect, useState } from "react";
import Axios from "axios"
import { useNavigate,Link } from "react-router-dom";
import { Domicilio, Fondo, Pedido, Pendiente, Select, Titulo, Regresar } from "./styled";

const SelectFactura = () => {
    const navigate = useNavigate()
    const [factura, setFactura] = useState([])
    const Domicilios = () => {
    Axios.get("http://localhost:3002/api/domicilios").then((response) => {
        setFactura(response.data)
    })
    .catch(error => {
    })
    }
    useEffect(()=>{
    Domicilios()
    },[])
    const enviar = (direccion) => {
    const parametro = direccion;
    const parametroCodificado = encodeURIComponent(parametro); //Cuando creas una URL, ciertos caracteres, como espacios, signos de puntuación y otros caracteres especiales, deben codificarse para que sean interpretados correctamente por los servidores web y los navegadores. encodeURIComponent realiza esta codificación al reemplazar caracteres no seguros en la URL con su equivalente codificado en URL
    navigate(`/private/todofisica/facturadomicilio/${parametroCodificado}`)
    }

return (
<>
    <Fondo>
        <Select>
            <Titulo>
                <Domicilio>Domicilios Pendientes</Domicilio>
                <Link to="/private/todofisica/fisica">
                    <Regresar>regresar al menu</Regresar>
                </Link>
            </Titulo>
            <Pedido>
                {factura.map((domi, index) => {
                return (
                <Pendiente onClick={()=> enviar(domi.direccion)} key={index}>
                    <h2 style={{margin:"0"}}>Nombre: {domi.nombre_cliente}.</h2>
                    <h2 style={{margin:"0"}}>Hora Entrega: {domi.hora_entrega}.</h2>
                    <h2 style={{margin:"0"}}>Direccion: {domi.direccion}.</h2>
                </Pendiente>
                )})}
            </Pedido>
        </Select>
    </Fondo>
</>
)
}
export default SelectFactura