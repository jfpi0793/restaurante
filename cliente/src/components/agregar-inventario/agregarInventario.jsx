import { useState } from "react";
import Axios from "axios"
import { Background, ConInfor, ConTitulo, Entrar, Infor, Login, Name, Titulo } from "./stylesAgregar";

import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";

const CrearProducto = () => {
    const navigate = useNavigate()
    const [nombreProducto, setNombreProducto] = useState("")
    const [categoria, setCategoria] = useState("")
    const [presentacion, setPresentacion] = useState("")
    const [unidad, setUnidad] = useState("")
    const [precio, setPrecio] = useState("")

    const { token } = useAuthContext();

    const agregarproducto = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3002/api/createproducto", {
            nombre_producto: nombreProducto,
            categoria: categoria,
            presentacion: presentacion,
            unidad: unidad,
            precio: precio
        }, {
            headers: {
                Authorization: token
            }
        })
            .then(({ data }) => {
                redireccionarALogin()
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 409) {
                        const errorMessage = error.response.data;
                        switch (errorMessage) {
                            case 'contraseña requerida.':
                                break;
                            case 'Nombre de usuario requerido.':
                                break;
                            case 'Correo requerido.':
                                break;
                            case 'Nombre de usuario o correo ya existente.':
                                break;
                            case 'Las contraseñas deben coincidir.':
                                break;
                            default:
                                break;
                        }
                    } else {
                        alert("Ocurrió un error en el registro.");
                    }
                } else {
                    alert("Ocurrió un error en la solicitud.");
                }
            });
    }
    const redireccionarALogin = () => {
        navigate("/private/inventario");
    };

    return (
        <>
            <Background>
                <Login>
                    <ConTitulo>
                        <Titulo>Agregar un nuevo producto</Titulo>
                    </ConTitulo>
                    <ConInfor>
                        <Name>Nombre del Producto</Name>
                        <Infor
                            type="text"
                            name="nombreProducto"
                            placeholder="nombre del producto"
                            autoComplete="off"
                            value={nombreProducto}
                            onChange={ev => setNombreProducto(ev.target.value)}>
                        </Infor>
                        <Name>Presentacion</Name>
                        <Infor
                            type="text"
                            name="presentacion"
                            placeholder="Presentacion"
                            autoComplete="off"
                            value={presentacion}
                            onChange={ev => setPresentacion(ev.target.value)}>
                        </Infor>
                        <Name>Categoria</Name>
                        <Infor
                            type="text"
                            name="categoria"
                            placeholder="Categoria"
                            autoComplete="off"
                            value={categoria}
                            onChange={ev => setCategoria(ev.target.value)}>
                        </Infor>
                        <Name>Unidad</Name>
                        <Infor
                            type="number"
                            name="unidad"
                            placeholder="Unidad"
                            autoComplete="off"
                            value={unidad}
                            onChange={ev => setUnidad(ev.target.value)}>
                        </Infor>
                        <Name>Precio</Name>
                        <Infor
                            type="text"
                            name="precio"
                            placeholder="Precio"
                            autoComplete="off"
                            value={precio}
                            onChange={ev => setPrecio(ev.target.value)}>
                        </Infor>
                        <Entrar onClick={agregarproducto}>Agregar</Entrar>
                    </ConInfor>
                </Login>
            </Background>
        </>
    );
}

export default CrearProducto;