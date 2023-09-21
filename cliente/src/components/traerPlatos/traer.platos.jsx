import { Pagina, Background, Receta,  DivPrincipal, Contendiv, Borrar, ContentImg, ImgPlato, DivFilas} from "./styles.dashboard2"

import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const TraerPlatos = () => {

    const [plato, setPlato] = useState([])
    const {token} = useAuthContext()

    console.log(plato,"este es plato")
    //mapeo de platos desde la db
    const Platos = () => {
        Axios.get("http://localhost:3002/api/platos", {
            headers: {
                Authorization: token
            } 
        }).then((response) => {
            setPlato(response.data)
            // console.log(response.data)
        })
        .catch(error => {
        // alert("hola: " + error.message);
        });
    }
    useEffect(() => {
        Platos()
    },)

    const eliminarProducto = (id_plato) => {
        Axios.delete(`http://localhost:3002/api/elimina/${id_plato}`)
            .then((response) => {
            console.log("Respuesta del servidor:", response.data);
            Platos()
            ;
            })
            .catch(error => {
            console.error("Error al eliminar el producto:", error);
        });
    }    





    return(
    <Pagina>
        <Background>
            <Receta>
                <h1>Platos</h1>
                <DivPrincipal >
                <div style={{position: "relative", top:"9%"}}>
                
                    {
                    plato.map((val, index)=>(    
                        <Contendiv key={index}>
                            
                            <DivFilas>
                                
                            <div style={{width: "100px"}} >{val.nombre_plato}</div>
                            <ContentImg>
                                <ImgPlato src={"http://localhost:3002/" + val.imagen} alt={val.nombre_plato}></ImgPlato>
                            </ContentImg>

                            <Link to={`/private/actualizarPlato/${val.id_plato}`}>
                            <button >editar</button>
                            </Link>
                            



                            <Borrar onClick={() => eliminarProducto(val.id_plato)} />

                            
                            
                            </DivFilas>
                        </Contendiv>
                        ))
                    }
                    </div>
                </DivPrincipal>
            </Receta>
        </Background>
    </Pagina>
    )
}