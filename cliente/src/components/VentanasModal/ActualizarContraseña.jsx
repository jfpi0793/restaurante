import React from "react";
import styled from "styled-components";
import Axios from "axios"
import { Container, Fondo, Salir, Salida, Mensaje, Form, ConInfor, Infor, Div } from "./styles";

// import Cumplido from "../Img/check-green.gif"
// import Finalizar from "../Img/cross-logo.gif"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./boton.css";
import { useAuthContext } from "../context/AuthContext";


const ActualizarContraseña = () => {
const navigate = useNavigate()
const [usuario, setUsuario] = useState("")
const [password, setPassword] = useState("")
const [Confirmpassword, setConfirmPassword] = useState("")
const { id } = useParams();
const {token} = useAuthContext()

console.log(id, "id en contraseña SIIIIIU")

const cliente = async () => {
    await Axios.get(`http://localhost:3002/api/cliente/${id}`,{
        headers: {
        Authorization: token
    } 
})
    .then((response) => {
        
        setUsuario(response.data.nombre)
        
        // setContaseña(response.data.password)
    })
    .catch(error =>{

    })
}

const actualizarusuario = (e) => {
e.preventDefault()

Axios.put(`http://localhost:3002/api/actualizarcontrasena/${id}`, {
    nombre: usuario,
    
    password: password,
    confirmarPassword: Confirmpassword,
  
    
},{
    headers: {
    Authorization: token
}  
})
.then(({data})=>{
    
    console.log(data,"estoy aqui")
    alert("usuario Actualizado")
    navigate("/private/traerCliente")
})
.catch(error => {
    if (error.response) {
    if (error.response.status === 409) {
        const errorMessage = error.response.data;
        switch (errorMessage) {
        case 'contraseña requerida.':
            console.log("Contraseña requerida.");
            break;
        case 'Nombre de usuario requerido.':
            console.log("Nombre de usuario requerido.");
            break;
        
        
        default:
            console.log("Error en la actualizacion.");
            break;
        }
    } else {
        alert("Ocurrió un error en la actualizacion.");
    }
    } else {
    alert("Ocurrió un error en la solicitud.");
    }
});
}

const cierra = () => {
    navigate(`/private/traerCliente`)
}

useEffect(() => {
    cliente()
}, [])

//   setTimeout(() => {
//     navigate("/todo/principal")
//   }, 1000);
return (
<div>
<Fondo>
    <Container>
    <Salir>
        
        <Salida onClick={cierra}>X</Salida>
        
    </Salir>
    <Mensaje>
        <h1 style={{margin:"0"}}>
        Actualizar Contraseña
        </h1>
    </Mensaje>
    <Form>
        <ConInfor>
            <Infor type="text"
            name="usuario"
            placeholder="Usuario"
            autoComplete="off"
            value={usuario}
            onChange={ev => setUsuario(ev.target.value)}/>
            <Infor type="password"
            name="contraseña"
            placeholder="Contraseña"
            autoComplete="off"
            value={password}
            onChange={ev => setPassword(ev.target.value)}/>
            <Infor type="password"
            name="contraseña"
            placeholder="Confirmar Contraseña"
            autoComplete="off"
            value={Confirmpassword}
            onChange={ev => setConfirmPassword(ev.target.value)}/>
        </ConInfor>
    </Form>     
        <Div>
        <a onClick={actualizarusuario} style={{fontWeight:"bold"}} href="#" class="btn-neon">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                    ACTUALIZAR
                </a>
        </Div>
                
    </Container>
</Fondo>      
</div>

)
}

export default ActualizarContraseña;
