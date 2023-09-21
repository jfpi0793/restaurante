// import Axios from "axios"
import { useEffect, useState } from "react"
import { Container, Titulo, ConTitulos, Titulos, Eliminar, Pedir, Conten } from "./styled"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Escoge from "../VentanasModal/eligeMenu";


const Carrito = () => {
    const navigate = useNavigate()
    const [plato, setPlatos] = useState([])
    const [llenar, setLlenar] = useState(false)
    const [totalPrecio, setTotalPrecio] = useState(0);
    useEffect(() => {
        const plato = JSON.parse(localStorage.getItem("platico"));
        if (Array.isArray(plato)) {
            // Realiza las operaciones necesarias solo si plato es un array válido
            const total = plato.reduce((acumulador, compra) => acumulador + compra.precio, 0);
            setTotalPrecio(total);
            setPlatos(plato);
        }
    }, []);

    const eliminar = (index) => {
        // Obtén los datos actuales de localStorage
        const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));

        // Verifica si los datos son un array y si el índice es válido
        if (Array.isArray(platoLocalStorage) && index >= 0 && index < platoLocalStorage.length) {
            // Utiliza splice para eliminar el elemento en el índice especificado
            platoLocalStorage.splice(index, 1);

            // Guarda los datos actualizados en localStorage
            localStorage.setItem("platico", JSON.stringify(platoLocalStorage));
            const total = platoLocalStorage.reduce((acumulador, compra) => acumulador + compra.precio, 0);
            setTotalPrecio(total);
            // Actualiza el estado local (si es necesario)
            setPlatos(platoLocalStorage);
        }
        window.location.reload()
    }
    const noEnviar = () => {
        if (plato.length > 0) {
            navigate("/domicilio")
        } else {
            setLlenar(!llenar)
            setTimeout(() => {
                setLlenar(false)
            }, 2000)
        }
    }
    const vaciar = () => {
        localStorage.clear("platico")
        setPlatos([])
        setTotalPrecio(0);
        window.location.reload();
    }

    return (
        <>
            {llenar && <Escoge />}
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
                                <Eliminar onClick={() => eliminar(index)}><h1 style={{ margin: "0" }}>X</h1></Eliminar>
                            </ConTitulos>
                        ))) : ""}
                </Conten>
                <ConTitulos>
                    <Titulos>Total: ${totalPrecio}</Titulos>
                    <Pedir onClick={noEnviar}>Pedir Order</Pedir>
                    <Pedir onClick={vaciar}>Vaciar</Pedir>
                </ConTitulos>
            </Container>
        </>
    )
}

export default Carrito