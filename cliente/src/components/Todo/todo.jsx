import React  from "react"
import {Outlet, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { HiOutlineShoppingCart, } from "react-icons/hi"
import { Container3, Minibox2, Button, Notificacion, Box1, Background } from "./styled";
import Carrito from "../orden/principal";
import { Link } from "react-router-dom";
import { Container4, Minibox3, Minibox4 } from "./styled";
import {BsFacebook} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
import { Loader, Placeholder } from 'rsuite';
import logo1 from "../Img/LOgo3.png"
import fondo from "../Img/FondoInfor.jpg"

const Todo = () => {
  const [activo, setActivo] = useState(false)
  const [notificacion, setNotificacion] = useState(0)
  const [platos, setPlatos] = useState([])
  const navigate = useNavigate()
useEffect(()=>{
  navigate("/menu") 
},[])

useEffect(() => {
  const plato = JSON.parse(localStorage.getItem("platico"));
  if (Array.isArray(plato)) {
    setPlatos(plato);
    setNotificacion(plato.length)
  }
}, []);

return (
  <Background style={{backgroundImage:`url(${fondo})`, backgroundSize:"cover"}}>
    <Container3>
      <Box1><h1 style={{color:"#ffffff93", margin:"0", filter:"drop-shadow(-5px 10px 6px black)"}}>Platos</h1></Box1>
      <Minibox2>
        <Button style={{fontSize:"60px", cursor:"pointer"}} onClick={()=> setActivo(!activo)}>
          <HiOutlineShoppingCart style={{filter:"drop-shadow(-5px 1px 3px black)"}}></HiOutlineShoppingCart>
          <Notificacion style={{fontSize:"22px", filter:"drop-shadow(-1px 10px 5px black)"}}>{notificacion}</Notificacion>
        </Button>
        <Link to="/informacion" style={{textDecoration:"none"}}>
          <Button><h1 style={{cursor:"pointer"}}>Informacion</h1></Button>            
        </Link>
        <Link to="/menu" style={{textDecoration:"none"}}>
          <Button><h1 style={{cursor:"pointer"}}>Menu</h1></Button> 
        </Link>
        {activo  && <Carrito/> }
      </Minibox2>
    </Container3>
    <div >
      <Outlet/>
    </div>
    <Container4>
        <Minibox3>
          <Minibox4 style={{backgroundImage: `url(${logo1})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center", filter: "drop-shadow(-0px -7px 5px white)"}}></Minibox4>
          <span style={{fontSize:"20px"}}>Disfruta © 2023</span>
          <span style={{fontSize:"20px"}}>todos los derechos reservados</span>
          <span style={{fontSize:"20px"}}> desarrollado por el grupo de la muerte</span>     
        </Minibox3>
        <Minibox3>
          <h2 style={{WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black",filter: "drop-shadow(-0px 0px 0px black)", fontSize:"29px", margin:"0"}}>Contactanos</h2>
          <h2 style={{WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black",filter: "drop-shadow(-0px 0px 0px black)", fontSize:"29px", margin:"0"}}>Pide tu Domicilio Ya</h2>
          <a target="_blank" rel="noreferrer" style={{textDecoration:"none"}}><span style={{fontSize:"20px", color:"white", textDecoration:"none"}}>320 5847516</span></a>
          <span></span>
          <span></span>          
        </Minibox3>
        <Minibox3>
          <h2 style={{WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black",filter: "drop-shadow(-0px 0px 0px black)", fontSize:"29px"}}>Siguenos</h2>
          <div style={{justifyContent:"space-evenly",width:"9rem",display:"flex"}}>
            <a href="https://m.facebook.com/login/?locale=es_ES" target="_blank" rel="noreferrer"><BsFacebook style={{fontSize:"30PX",color:"#0011ff", backgroundColor:"white", borderRadius:"14px"}}></BsFacebook></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagramSquare style={{fontSize:"32px", color:"hsl(285, 90%, 50%)",borderRadius:"80px",background:"white"}}></FaInstagramSquare></a>
          </div>          
        </Minibox3>
      </Container4>
  </Background>
  )
}

export default Todo