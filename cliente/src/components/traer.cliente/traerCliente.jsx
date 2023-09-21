import React from "react";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Contenedor, Main, Tabla, Thead, Tr, Th, Tbody, Td, Borrar } from "./styles";
import "./styles.css"


export const ListarClientes = () => {

    const {token} = useAuthContext()
    const [cliente, setCliente] = useState([])
    const navigate = useNavigate()
    console.log(cliente, "aqui esta cliente😎😎😎");
    console.log(cliente[0])



    const clientes = () => {
        Axios.get("http://localhost:3002/api/cliente",{
            headers: {
            Authorization: token
        } 
    })
        .then((response) => {
            setCliente(response.data)
        })
        .catch(error =>{

        })
    }

    const eliminarCliente = (id_admin) => {
        Axios.delete(`http://localhost:3002/api/eliminarcliente/${id_admin}`)
            .then((response) => {
            console.log("Respuesta del servidor:", response.data);
            clientes()
            ;
            })
            .catch(error => {
            console.error("Error al eliminar el producto:", error);
        });
    }    

    useEffect(() => {
        clientes()
    },[])

    // const enviaraActualizar = () => {
    //     navigate(`/private/actualizarCliente/${cliente.id_cliente}`)
    // }

    return(
        <Contenedor>
            <Main>
                <h2>Listado de Admin</h2>

                <Tabla >
                    <Thead  >
                        <Tr>
                            
                                <Th>NOMBRE_USUARIO</Th>
                                <Th>CORREO</Th>
                                <Th>ACCION</Th>
                            
                        </Tr>
                    </Thead>
                    <Tbody style={{backgroundColor:"white"}}>
                        {
                            cliente.map((val, index)=>(
                                
                            <Tr  key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#00b7ff68' }} >
                                <Td>{val.nombre_admin}</Td>
                                <Td>{val.correo}</Td>
                                <Td>
                                    <Link to={`/private/actualizarCliente/${val.id_admin}`}>
                                        <button >
                                            Editar
                                        </button>
                                    </Link>
                                    <Borrar onClick={() => eliminarCliente(val.id_admin)}>
                                        Borrar
                                    </Borrar>
                                </Td>
                            </Tr>  

                            ))
                        }
                        {/* <tr  >
                                <td>Ariel Camargo</td>
                                <td>arielcp0610@hotmail.com</td>
                                <td><button>Editar</button><button>Borrar</button></td>
                            </tr>   */}

                    </Tbody>
                </Tabla>
            </Main>
        </Contenedor>
    )
};