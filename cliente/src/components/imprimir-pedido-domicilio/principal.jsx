import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Background, ContPrincipal, ContFactura, ResPrecios, ContBoton, BotonImprimir } from "./styled";
import { useNavigate } from "react-router-dom";

const ImprimirDomicilio = () => {
    const Navegate = useNavigate()
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [nombre, setNombre] = useState()
    const calculateTotal = (platos) => {
        const pedidosConProductos = platos.filter(item => item.nombre_plato && item.cantidad);
        setNombre(pedidosConProductos[0].nombre_cliente)
    };
    const handlePrintClick = () => {
        window.print();
    };

    // cambio 
    const Domicilios = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro); //Cuando creas una URL, ciertos caracteres, como espacios, signos de puntuación y otros caracteres especiales, deben codificarse para que sean interpretados correctamente por los servidores web y los navegadores. encodeURIComponent realiza esta codificación al reemplazar caracteres no seguros en la URL con su equivalente codificado en URL
        Axios.get(`http://localhost:3002/api/domicilio/${parametroCodificado}`).then((response) => {
            setFilteredReservas(response.data)
            calculateTotal(response.data)
        })
            .catch(error => {
            })
    }
    useEffect(() => {
        Domicilios()
    }, [])
    const regresa = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro); 
        Navegate(`/private/todofisica/facturadomicilio/${parametroCodificado}`)
    }
    const { di } = useParams();

    return (
        <Background>
            <ContPrincipal>
                <h1 style={{ textAlign: "center", color: "white" }}>Imprimir Domicilio </h1>
                <ContFactura>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: "transparent", color: "white" }}>PRODUCTO</th>
                                <th style={{ backgroundColor: "transparent", color: "white" }}>CANTIDAD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservas.map((pedido, index) => (
                                <tr key={index}>
                                    <td style={{ color: "white" }}>{pedido.nombre_plato}</td>
                                    <td style={{ color: "white" }}>{pedido.cantidad}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ContFactura>
                <ResPrecios>
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir pedido</BotonImprimir>
                        <BotonImprimir onClick={regresa}>regresar</BotonImprimir>
                </ContBoton>
            </ContPrincipal>
        </Background>
    );
};

export default ImprimirDomicilio;



