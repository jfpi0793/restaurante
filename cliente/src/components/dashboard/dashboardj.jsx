import { Pagina, Background, Receta, Hoja1, Hoja2, ConInfor, Infor, InforImg, Name, Entrar, Div, SpanImg, LabelImg, ContentImg, ImgPlato, Nota, DivPrincipal } from "./stylesDashboard"
import { Sticker } from "./stylesDashboard";
import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const Dashboard = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [nombrePlato, setNombrePlato] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [imgEnv, setImgEnv] = useState("")
    const [tipoPlato, setTipoPlato] = useState("")
    const navigate = useNavigate()
    const { token } = useAuthContext();
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

        datos.append("nombre_plato", nombrePlato)
        datos.append("descripcion", descripcion)
        datos.append("precio", precio)
        datos.append("imagen", imgEnv)
        datos.append("tipo_plato", tipoPlato)

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: token
            }
        };
        Axios.post("http://localhost:3002/api/crearplato", datos, config)
            .then(({ data }) => {
                ;
                navigate("/private/traerPlato")
            })
            .catch((error) => {
            });
    }

    return (
        <Pagina>
            <Background>
                <Receta>
                    <DivPrincipal>
                        <Hoja1>
                            <Div>
                                <Name>Ingrese el nombre del plato:</Name>
                                <Infor
                                    type="text"
                                    name="nombrePlato"
                                    placeholder="nombre del plato"
                                    autoComplete="off"
                                    value={nombrePlato}
                                    onChange={ev => setNombrePlato(ev.target.value)}>
                                </Infor>
                            </Div>
                            <Div style={{ alignItems: "start" }}>
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
                                    style={{ height: "80px", width: "150px", borderRadius: "8px" }}>
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
                                <Name>Ingrese el tipo de plato:</Name>
                                <Infor
                                    type="text"
                                    name="tipoPlato"
                                    placeholder="tipo del plato"
                                    autoComplete="off"
                                    value={tipoPlato}
                                    onChange={ev => setTipoPlato(ev.target.value)}>
                                </Infor>
                            </Div>
                        </Hoja1>
                        <Hoja2>
                            <ConInfor style={{ height: "480px" }}>
                                <div style={{ height: "100px", width: "100%", display: "flex", justifyContent: "center" }}>
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
                                <div style={{ display: "flex" }}>
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