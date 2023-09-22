import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Background,
    ContPrincipal,
    ContFactura,
    ResPrecios,
    ContBoton,
    BotonImprimir,
} from "./styled";
import mesaFunctions from "../vista-mesa/mesa.services/mesa.services";
import { useDataState } from "../vista-mesa/data.context/data.state.context";
import axios from "axios";
import moment from 'moment';
import { Pago } from "../payu/principal";

const Factura = ({ mesa }) => {
    const navigate = useNavigate()
    const [total, setTotal] = useState(0);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [lastInsertedId, setLastInsertedId] = useState(null)
    const [redirectToPayU,setRedirectToPayU] = useState(false)
    const [numMesa, setNumMesa] = useState(null); // Cambio de numOrden a numMesa
    const { mesaData } = useDataState();
    const mesaSeleccionada = mesa ?? mesaData[0]?.id_mesa;

    useEffect(() => {
        setFilteredReservas(mesaData);
        calculateTotal();
    }, [mesaData]);

    useEffect(() => {
        mesaFunctions.getAllMesa(mesa)
            .then(response => {
                const convertedResponse = response.map(item => ({
                    ...item,
                    precio: parseFloat(item.precio),
                    cantidad: parseInt(item.cantidad),
                }));
                setFilteredReservas(convertedResponse);
                calculateTotal();
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [mesa]);

    const calculateTotal = () => {
        const pedidosConProductos = mesaData.filter(
            (item) => item.producto && item.precio
        );
        const totalAmount = pedidosConProductos.reduce((accumulator, pedido) => {
            const precio = parseFloat(pedido.precio);
            if (!isNaN(precio)) {
                return accumulator + precio;
            }
            return accumulator;
        }, 0);
        setTotal(totalAmount);
    };

    const handleIrRegistroFact = async () => {
        try {
            const fecha_factura = moment().format('YYYY/MM/DD, HH:mm:ss a');
            const productos = mesaData.map((pedido) => ({
                producto: pedido.producto,
                cantidad: pedido.cantidad,
                precio: pedido.precio,
                fecha_factura,
            }));
            const facturaData = {
                id_mesa: mesaSeleccionada, 
                productos,
                fecha_factura,
            };

            // Asegúrate de que numMesa sea un valor numérico
            const idMesaNumerico = parseInt(numMesa, 10);
            if (!isNaN(idMesaNumerico)) {
                facturaData.id_mesa = idMesaNumerico;
            }

            // Realiza una solicitud POST para registrar la factura junto con id_mesa
            const response = await axios.post('http://localhost:3002/api/registro', facturaData);
            console.log('Respuesta del servidor:', response.data);

            if (response.status === 200) {
                console.log('La factura se ha registrado correctamente.');

                const id_orden = response.data.numOrden;
                console.log('Valor de id_orden:', id_orden); 
                if (id_orden !== null && id_orden !== undefined) {
                    setNumMesa(id_orden);
                    await handleEliminarRegistros();
                } else {
                    console.error('id_mesa no es un número válido.');
                }
            } else {
                console.error('Error en la solicitud POST:', response.statusText);
            }
        } catch (error) {
            console.error('Error al procesar la factura:', error);
        }
    };

    const handleEliminarRegistros = async () => {
        try {
            console.log('Entrando en handleEliminarRegistros');
            console.log('Valor de idMesa antes de la conversión:', numMesa);
            const idMesaInt = parseInt(numMesa);
            console.log('Valor de idMesaInt:', idMesaInt);

            if (!isNaN(idMesaInt)) {
                const response = await axios.delete(`http://localhost:3002/api/mesa_id/${idMesaInt}`);
                console.log('Número de mesa eliminado:', idMesaInt);
                console.log(response);
                if (response.status === 200) {
                    console.log('Registros eliminados correctamente.');
                    // Estableces el id_mesa eliminado en el estado
                    setNumMesa(idMesaInt);
                } else {
                    console.error('Error al eliminar registros:', response.statusText);
                }
            } else {
                console.error('idMesa no es un número válido.');
            }
        } catch (error) {
            console.error('Error al eliminar registros:', error);
        }
    };

    const handlePrintClick = () => {
        window.print();
    };

    useEffect(() => {
        const obtenerUltimoId = async () => {
            try {
                const response = await axios.get('http://localhost:3002/api/ultimo-id');
                const ultimoId = response.data;
                setLastInsertedId(ultimoId);
            } catch (error) {
                console.error('Error al obtener el último ID:', error);
            }
        };
    
        obtenerUltimoId();
    }, []);

    return (
        <Background>
            <ContPrincipal>
                <h1 style={{ textAlign: "center" , color:"white" }}>Factura de Mesa {mesaSeleccionada}</h1>
                <BotonImprimir style={{marginLeft: "20px"}} onClick={() => navigate('/private/todofisica/mesa')}>Regresar</BotonImprimir>
                <ContFactura>
                    <table>
                        <thead>
                            <tr>
                                <th style={{backgroundColor:"transparent",color:"white"}}>PRODUCTO</th>
                                <th style={{backgroundColor:"transparent",color:"white"}}>CANTIDAD</th>
                                <th style={{backgroundColor:"transparent",color:"white"}}>PRECIO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservas.map((pedido, index) => (
                                <tr key={index}>
                                    <td style={{color:"white"}}>{pedido.producto}</td>
                                    <td style={{color:"white"}}>{pedido.cantidad}</td>
                                    <td style={{color:"white"}}>{pedido.precio}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </ContFactura>
                <ResPrecios>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <p style={{ fontWeight: 'bolder', fontSize: 'x-large', fontStyle: 'italic', margin: '0' , color:"white" }}>Total: $ {total}</p>
                    </div>
                    <Pago total={total} lastInsertedIdProp={parseInt(lastInsertedId, 10)} />
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir factura</BotonImprimir>
                    <Link to="/private/todofisica/registro-fact">
                        <BotonImprimir id="registrarFacturaButton" onClick={handleIrRegistroFact}>Ir a registro de facturas</BotonImprimir>
                        <BotonImprimir onClick={handleEliminarRegistros} style={{ marginTop: '20px' }}> Eliminar Registros de la Factura </BotonImprimir>
                    </Link>
                </ContBoton>
            </ContPrincipal>
        </Background>
    );
};

export default Factura
