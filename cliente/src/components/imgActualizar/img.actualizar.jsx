import React from "react";
import styled from "styled-components";
import Axios from "axios"
import { Container, Fondo, Salir, Salida, Mensaje, Form, ConInfor, Infor, Div, LabelImg, SpanImg, InforImg, ContentImg, ImgPlato } from "./styles";

// import Cumplido from "../Img/check-green.gif"
// import Finalizar from "../Img/cross-logo.gif"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAuthContext } from "../context/AuthContext";


const ActualizarImg = () => {
const navigate = useNavigate()
const [selectedImage, setSelectedImage] = useState(null);
const [imgEnv, setImgEnv] = useState("");
const { id } = useParams();
const {token} = useAuthContext()

console.log(id, "id en contraseña SIIIIIU")



const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setSelectedImage(URL.createObjectURL(file));
        setImgEnv(file);
    }
};

const actualizarusuario = (e) => {
e.preventDefault()

const datos = new FormData();

datos.append("imagen", imgEnv)

Axios.put(`http://localhost:3002/api/actualizarImgPlato/${id}`, datos, {
    headers: {
    Authorization: token
}  
})
.then(({data})=>{
    
    console.log(data,"estoy aqui")
    alert("usuario Actualizado")
    // navigate("/private/traerPlato")
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
    navigate(`/private/traerPlato`)
}



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
            Actualizar Imagen
        </h1>
    </Mensaje>
    <Form>
        <ConInfor>
        
                            <LabelImg className="btn btn-warning">
                                <SpanImg>Cargar </SpanImg>
                                
                                <InforImg
                                    hidden 
                                    type="file"
                                    onChange={handleImageChange}>
                                </InforImg>
                            </LabelImg>
                            
                        
                            <ContentImg>
                                {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
                            </ContentImg>
                       
        </ConInfor>
    </Form>     
        <Div>
        <a onClick={actualizarusuario} style={{fontWeight:"bold"}} href="#" class="btn-neon">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                    ACTUALIZAR IMG
                </a>
        </Div>
                
    </Container>
</Fondo>      
</div>

)
}

export default ActualizarImg;