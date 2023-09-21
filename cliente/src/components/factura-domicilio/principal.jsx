import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Background, ContPrincipal, ContFactura, ResPrecios, ContBoton, BotonImprimir } from "./styled";
import { Link, useNavigate } from "react-router-dom";

const FacturaDomicilio = () => {
    const Navegate = useNavigate()
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [nombre, setNombre] = useState()
    const calculateTotal = (platos) => {
        const pedidosConProductos = platos.filter(item => item.nombre_plato && item.cantidad && item.precio);
        setNombre(pedidosConProductos[0].nombre_cliente)
        const subtotalAmount = pedidosConProductos.reduce((accumulator, pedido) => {
            const pedidoTotal = parseFloat(pedido.precio);
            return accumulator + pedidoTotal;
        }, 0);
        const totalAmount = subtotalAmount
        setTotal(totalAmount);
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
    const envia = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro);
        Navegate(`/private/todofisica/imprimirdomicilio/${parametroCodificado}`)
    }
    const { di } = useParams();

    return (
        <Background>
            <ContPrincipal>
                <h1 style={{ textAlign: "center", color: "white" }}>Factura Domicilio </h1>
                <ContFactura>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: "transparent", color: "white" }}>PRODUCTO</th>
                                <th style={{ backgroundColor: "transparent", color: "white" }}>CANTIDAD</th>
                                <th style={{ backgroundColor: "transparent", color: "white" }}>PRECIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservas.map((pedido, index) => (
                                <tr key={index}>
                                    <td style={{ color: "white" }}>{pedido.nombre_plato}</td>
                                    <td style={{ color: "white" }}>{pedido.cantidad}</td>
                                    <td style={{ color: "white" }}>{pedido.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ContFactura>
                <ResPrecios>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0', color: "white" }}>Cliente: {nombre}</p>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0', color: "white" }}>Total: $ {total}</p>
                    </div>
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir factura</BotonImprimir>
                    <BotonImprimir onClick={envia}>Imprimir pedido </BotonImprimir>
                    <Link to="/private/todofisica/selectfactura">
                        <BotonImprimir>regresar</BotonImprimir>
                    </Link>
                </ContBoton>
            </ContPrincipal>    
        </Background>
    );
};

export default FacturaDomicilio;



