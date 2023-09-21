import { Pagina, Background, Receta, Hoja1, Hoja2, ConInfor, Infor, InforImg, Name, Entrar, Div, SpanImg, LabelImg, ContentImg, ImgPlato, Nota, DivPrincipal} from "./styles.dashboard2"
import { Sticker } from "./styles.dashboard2";
import React, { useState } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const DashboardBebida = () => {
    const navigate = useNavigate()
    const {token} = useAuthContext()
    const [selectedImage, setSelectedImage] = useState(null);
    const [nombreBebida, setNombreBebida] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [imgEnv, setImgEnv] = useState("")
    const [colores, setColores] = useState("")
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setImgEnv(file);
        }
    };      

const agregarplato = (e) => {
e.preventDefault()

const datos = new FormData();

datos.append("nombre_bebida", nombreBebida)
datos.append("descripcion", descripcion)
datos.append("precio", precio)
datos.append("imagen", imgEnv)
datos.append("colores", colores)

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
    }
    };
    Axios.post("http://localhost:3002/api/crearbebida", datos, config)
    .then(({ data }) => {
    navigate("/private/traerBebida")
    })
    .catch((error) => {
    });
}

    return(
    <Pagina>
        <Background>
            <Receta>
                <DivPrincipal>
                    <Hoja1>
                        <Div>
                            <Name>Ingrese el nombre de la Bebida:</Name>
                            <Infor
                                type="text"
                                name="nombreBebida"
                                placeholder="nombre de la bebida"
                                autoComplete="off"
                                value={nombreBebida}
                                onChange={ev => setNombreBebida(ev.target.value)}>
                            </Infor>
                        </Div>
                        <Div style={{ alignItems:"start"}}>
                            <Name >Ingrese la Descripción:</Name>
                            <Infor 
                                type="text"
                                name="descripcion"
                                placeholder="Descripción"
                                autoComplete="off"
                                rows="10" 
                                cols="40"
                                value={descripcion}
                                onChange={ev => setDescripcion(ev.target.value)}
                                style={{  height: "80px", width: "150px", borderRadius: "8px" }}>
                            </Infor>
                        </Div>
                        <Div>
                            <Name>Ingrese el precio:</Name>
                            <Infor
                            type="text"
                            name="precio"
                            placeholder="Precio"
                            autoComplete="off"
                            value={precio}
                            onChange={ev => setPrecio(ev.target.value)}>
                            </Infor>
                        </Div>
                        <Div>
                            <Name>Ingrese el Color:</Name>
                            <Infor
                                type="text"
                                name="colores"
                                placeholder="color de la bebida"
                                autoComplete="off"
                                value={colores}
                                onChange={ev => setColores(ev.target.value)}>  
                            </Infor>
                        </Div>
                    </Hoja1>
                    <Hoja2>
                        <ConInfor style={{height:"480px"}}>
                            <div style={{ height:"100px", width:"100%", display:"flex", justifyContent: "center"}}>
                                <LabelImg className="btn btn-warning">
                                <SpanImg> </SpanImg>
                                <InforImg
                                    hidden 
                                    type="file"
                                    onChange={handleImageChange}>
                                </InforImg>
                                </LabelImg>
                                <Nota></Nota>
                            </div>
                                <ContentImg>
                                    {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
                                </ContentImg>
                            <div style={{display: "flex"}}>
                            <Entrar onClick={agregarplato}></Entrar>
                            <Sticker></Sticker>
                            </div>
                        </ConInfor>
                    </Hoja2>
                </DivPrincipal>
            </Receta>
        </Background>
    </Pagina>
    )
}