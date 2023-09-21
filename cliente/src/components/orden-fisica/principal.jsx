import React, { useEffect, useState } from "react";
import { Container, Titulo, ConTitulos, Titulos, Eliminar, Pedir, Conten } from "./styled";
import { Link, useNavigate } from "react-router-dom";


const CarritoFisica = () => {
    const [totalPrecio, setTotalPrecio] = useState(0);
    const [plato, setPlatos] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const plato = JSON.parse(localStorage.getItem("platico"));
        const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
        if (Array.isArray(plato)) {
            setPlatos(plato);
            const total = plato.reduce((acumulador, compra) => acumulador + compra.precio, 0);
            setTotalPrecio(total);
        }
        setPlatos(platoLocalStorage);
    }, []);
    const eliminar = (index) => {
        const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
        if (Array.isArray(platoLocalStorage) && index >= 0 && index < platoLocalStorage.length) {
            platoLocalStorage.splice(index, 1);
            localStorage.setItem("platico", JSON.stringify(platoLocalStorage));
            const total = platoLocalStorage.reduce((acumulador, compra) => acumulador + compra.precio, 0);
            setTotalPrecio(total);
            setPlatos(platoLocalStorage);
            window.location.reload()
        }
    };
    const transferirDatos = () => {
        const datosAEnviar = plato;
        localStorage.setItem("datosAEnviar", JSON.stringify(datosAEnviar));
        // Cierra la ventana actual
        navigate("/private/todofisica/recibir-orden")
        window.location.reload();
        // window.close();   
    };

    return (
        <>
            <Container>
                <Titulo>Orden</Titulo>
                <ConTitulos>
                    <Titulos>Nombre</Titulos>
                    <Titulos>Cantidad</Titulos>
                    <Titulos>Precio</Titulos>
                    <Titulos>Eliminar</Titulos>
                </ConTitulos>
                <Conten>
                    {Array.isArray(plato) ? (
                        plato.map((compra, index) => (
                            <ConTitulos key={index}>
                                <Titulos>{compra.nombre_plato}</Titulos>
                                <Titulos>{compra.cantidad}</Titulos>
                                <Titulos>${compra.precio}</Titulos>
                                <Eliminar onClick={() => eliminar(index)}>X</Eliminar>
                            </ConTitulos>
                        ))
                    ) : ""}
                </Conten>
                <ConTitulos>
                    <Titulos>Total: ${totalPrecio}</Titulos>
                    <Link to="/private/todofisica/recibir-orden">
                        <Pedir onClick={transferirDatos}>Enviar Orden</Pedir>
                    </Link>
                </ConTitulos>
            </Container>
        </>
    );
};

export default CarritoFisica;
