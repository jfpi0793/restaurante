import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
    Background,
    ContPrincipal,
    InputContainer,
    Boton,
    Table,
    Thead,
    Tbody,
    Tr1,
    Tr2,
    Th,
    Td,
    TdMesa
} from "./styled";
import { Link, useNavigate } from "react-router-dom";

const RegistroFactura = () => {
    const navigate = useNavigate()
    const [facturas, setFacturas] = useState([]);
    const [filtros, setFiltros] = useState({ mesa: null, fecha: null });
    const [totalPrecios, setTotalPrecios] = useState(0);
    const [error, setError] = useState("");
    const [lastAssignedIdMesa, setLastAssignedIdMesa] = useState(null); 

    const cargarRegistros = async () => {
        try {
            let url = "http://localhost:3002/api/registro";
            if (filtros.mesa && filtros.fecha) {
                url = `http://localhost:3002/api/registro/por-mesa-y-fecha/${encodeURIComponent(filtros.mesa)}/${moment(filtros.fecha).format('YYYY-MM-DD')}`;
            } else if (filtros.mesa) {
                url = `http://localhost:3002/api/registro/por-mesa/${encodeURIComponent(filtros.mesa)}`;
            } else if (filtros.fecha) {
                url = `http://localhost:3002/api/registro/por-fecha/${moment(filtros.fecha).format('YYYY-MM-DD')}`;
            }
            const response = await axios.get(url);
            const total = response.data.reduce((accumulator, factura) => {
                return accumulator + parseFloat(factura.precio);
            }, 0);
            setFacturas(response.data);
            setTotalPrecios(total);
            // Guardar el último id_mesa asignado
            if (response.data.length > 0) {
                setLastAssignedIdMesa(response.data[0].id_mesa);
            }
        } catch (error) {
            console.error("Error al cargar registros:", error);
        }
    };

    useEffect(() => {
        cargarRegistros(); 
    }, [filtros]);

    const handleFiltroChange = (e) => {
        const { name, value } = e.target;
        console.log("Fecha seleccionada:", value)
        setFiltros((prevFiltros) => ({
            ...prevFiltros,
            [name]: value.trim()
        }));
        setError("");
    };

    const borrarFiltros = () => {
        setFiltros((prevFiltros) => ({
            ...prevFiltros,
            mesa: null,
            fecha: null,
        }));
    };

    const handlePrintClick = () => {
        window.print();
    };

    const handleBackToLastAssigned = async () => {
        if (lastAssignedIdMesa) {
            navigate(`/private/todofisica/factura/${lastAssignedIdMesa}`);
        }
    };


    return (
        <Background>
            <div>
                <InputContainer>
                    <label>Mesa:</label>
                    <input type="text" name="mesa" value={filtros.mesa || ""} onChange={handleFiltroChange} />
                </InputContainer>
                <InputContainer>
                    <label>Fecha:</label>
                    <input type="date" name="fecha" value={filtros.fecha || ""} onChange={handleFiltroChange} />
                </InputContainer>
                <InputContainer>
                    <Boton onClick={borrarFiltros}>Borrar Filtros</Boton>
                </InputContainer>
            </div>
            <ContPrincipal>
                <Table>
                    <Thead>
                        <Tr1>
                            <Th>Mesa</Th>
                            <Th>Producto</Th>
                            <Th>Cantidad</Th>
                            <Th>Precio</Th>
                            <Th>Fecha</Th>
                        </Tr1>
                    </Thead>
                    <Tbody>
                        {facturas.map((factura) => (
                            <Tr2 key={factura.id_registro_fact}>
                                <TdMesa>{factura.id_mesa}</TdMesa>
                                <Td>{factura.producto}</Td>
                                <Td style={{ textAlign: "center" }}>{factura.cantidad}</Td>
                                <Td style={{ textAlign: "center" }}> $ {Number(factura.precio).toFixed(0)}</Td>
                                <Td>{moment(factura.fecha_factura).format('YYYY/MM/DD, HH:mm:ss a')}</Td>
                            </Tr2>
                        ))}
                    </Tbody>
                </Table>
                {error && <p>{error}</p>}
            </ContPrincipal>
            <p style={{ color: "white", fontSize: "20px" }}>Total en ventas: ${totalPrecios}</p>
            <Link to="/private/todofisica/fisica">
                <Boton style={{ marginTop: "20px" }}>Regresar al menú</Boton>
            </Link>
            <Boton style={{ marginTop: "20px" }} onClick={handlePrintClick}>Imprimir factura</Boton>
            <Boton style={{ marginTop: "20px" }} onClick={handleBackToLastAssigned}>Volver a la última factura asignada</Boton>
        </Background>
    );
};

export default RegistroFactura;
