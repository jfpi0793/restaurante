import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import {Body, Container, Header, ContainerHeader, Boton, CajaNav, CajaLogo, ContainerMain, ContainerMenu, ContainerFooter} from "./styles-princDashboard"
import { LOGOUT } from "../router/path";
import Axios from "axios"
import { useAuthContext } from "../context/AuthContext"
import Paila from "../VentanasModal/paila";

function PrincipalDashboard() {
    const [producto, setProducto] = useState([]);
    const { token, logout } = useAuthContext();
    const ubicacion = useLocation()
    const [user, setUser] = useState("")
    const [destokenado, setDestokenado] = useState("")
    const [activo, setActivo] = useState(false)

    const Producto = () => {
        Axios.get("http://localhost:3002/api/traerproductos", {
            headers: {
                Authorization: token
            } 
        }).then((response) => {
            setProducto(response.data)
        })
        .catch(error => {
        });
    }
    useEffect(() => {
        Producto()
    }, [])

    const decodeJWT= (token) => {
        try{
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const decode = JSON.parse(jsonPayload);
        setDestokenado(decode.id)
        console.log(destokenado, "en decode")
    }
    catch{
        setActivo(true) 
    }
    
    }

    
  const cliente = async () => {
    await Axios.get(`http://localhost:3002/api/cliente/${destokenado}`,{
        headers: {
        Authorization: token
    } 
})
    .then((response) => {
        
        setUser(response.data.nombre)
        
        
    })
    .catch(error =>{
        if(error){
            logout()
        }
    })
}

useEffect(() => {
    
    decodeJWT(token)
    
}, [])


setTimeout(() => {
    cliente()
  }, 1000);

return (
    <>

{activo && <Paila />}
<Body>
    <Container>
        <ContainerHeader>    
            <Header>
                <CajaLogo >
                    <h1>Bienvenido {user} </h1>
                </CajaLogo>
                <div style={{fontSize:"20px"}}><Link to={LOGOUT}><Boton style={{height:"80px"}}>🔚Cerrar sesión</Boton></Link></div>
            </Header>
        </ContainerHeader>
        <CajaNav>
            <Link to="/private"><Boton>🏠Inicio</Boton></Link>
            <Link to="/private/dashboard"><Boton>🍝Agregar Plato</Boton></Link>
            <Link to="/private/crearBebida"><Boton>🍹Agregar Bebida</Boton></Link>
            <Link to="/private/register"><Boton>👤Crear Usuario</Boton></Link>
            <Link to="/private/crearProducto"><Boton>📦Agregar Producto</Boton></Link>
            <Link to="/private/traerCliente"><Boton>👨‍💼Administradores</Boton></Link>
            <Link to="/private/traerPlato"><Boton>🥗Platos</Boton></Link>
            <Link to="/private/traerBebida"><Boton>🍸Bebidas</Boton></Link>
            <Link to="/private/inventario"><Boton>📚 Inventario</Boton></Link>
        </CajaNav>      
        <ContainerMain >
            <Outlet />
        </ContainerMain >
        <ContainerMenu><h1>Productos</h1>
            {
                producto.map((val, index)=>(    
                    <div key={index}>
                        <div style={{width:"300px",display:"flex", alignItems: "center", justifyContent:"center", height:"100%"}}>
                            <h5 >{val.nombre_producto}</h5>
                        </div>
                    </div>
                    ))
            }
        </ContainerMenu>
    </Container> 
</Body>

</>

);
}

export default PrincipalDashboard;


