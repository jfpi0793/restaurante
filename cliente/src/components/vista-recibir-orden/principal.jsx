import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Background,
    ContPrincipal,
    ContFactura,
    ResPrecios,
    ContBoton,
    BotonImprimir,
} from "./styled";
import Axios from "axios";

const RecibirOrden = () => {
    const navigate = useNavigate();
    const [mesasDisponibles, setMesasDisponibles] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

    useEffect(() => {
        Axios.get("http://localhost:3002/api/allPlatos")
            .then((response) => {
            })
            .catch((error) => {
                console.error("Error fetching platos data:", error);
            });
        Axios.get("http://localhost:3002/api/bebidas")
            .then((response) => {
            })
            .catch((error) => {
                console.error("Error fetching bebidas data:", error);
            });
        const carritoProductos = JSON.parse(localStorage.getItem("platico")) || [];
        setProductosSeleccionados(carritoProductos);
    }, []);
    const handleMesaSeleccionada = (event) => {
        const numeroMesa = event.target.value;
        setMesaSeleccionada(numeroMesa);
    };
    const calcularSubtotal = () => {
        let total = 0;
        for (const producto of productosSeleccionados) {
            total += producto.precio;
        }
        return total;
    };
    useEffect(() => {
        const subtotal = calcularSubtotal();
        setSubtotal(subtotal);
    }, [productosSeleccionados]);
    const enviarPedidoAMesa = () => {
        if (!mesaSeleccionada) {
            console.error("No se ha seleccionado una mesa.");
            return;
        }
        if (productosSeleccionados.length === 0) {
            console.error("Ningún producto seleccionado.");
            return;
        }
        const pedido = {
            numeroMesa: mesaSeleccionada,
            productos: productosSeleccionados.map(producto => ({
                nombre: producto.nombre_plato,
                cantidad: producto.cantidad,
                precio: producto.precio,
            })),
        };
        Axios.post("http://localhost:3002/api/crear-mesa", pedido)
            .then((response) => {
                navigate("/private/todofisica/mesa");
                localStorage.removeItem("platico")
                window.location.reload()
            })
            .catch((error) => {
                console.error("Error al enviar el pedido a la mesa:", error);
            });
    };
    
    const handlePrintClick = () => {
        window.print();
    };

    return (
        <Background>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom:"20px" }}>
                        <select onChange={handleMesaSeleccionada}>
                            <option value="">Seleccione una mesa</option>
                            {mesasDisponibles.map((numeroMesa, index) => (
                                <option key={index} value={numeroMesa}>
                                    Mesa {numeroMesa}
                                </option>
                            ))}
                        </select>
                    </div>
            <ContPrincipal>
                <h1 style={{ textAlign: "center", color: "white" }}>Orden</h1>
                <BotonImprimir style={{ display: "flex", justifyContent: "center", margin: "auto" }} onClick={() => navigate('/private/todofisica/fisica')}>Regresar</BotonImprimir>
                <ContFactura>
                    <table>
                        <tbody>
                        </tbody>
                    </table>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <thead>
                                <tr>
                                    <th style={{ backgroundColor: "transparent" }}></th>
                                    <th style={{ width: "200px", backgroundColor: "transparent", color: "white" }}>Nombre</th>
                                    <th style={{ backgroundColor: "transparent", color: "white" }}>Cantidad</th>
                                    <th style={{ backgroundColor: "transparent", color: "white" }}>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productosSeleccionados.map((producto, index) => (
                                    <tr key={index}>
                                        <td style={{ margin: "0", padding: "0" }}>
                                            
                                        </td>
                                        <td style={{ color: "white" }}>{producto.nombre_plato}</td>
                                        <td style={{ color: "white" }}>{producto.cantidad}</td>
                                        <td style={{ color: "white" }}>{producto.precio}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ContFactura>
                <ResPrecios>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0', color: "white" }}>Total: $ {subtotal.toFixed(0)}</p>
                    </div>
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir factura</BotonImprimir>
                    <BotonImprimir
                        onClick={enviarPedidoAMesa}
                        disabled={productosSeleccionados.length === 0}
                    >
                        Tomar Pedido
                    </BotonImprimir>
                </ContBoton>
            </ContPrincipal>
        </Background>
    );
};

export default RecibirOrden;