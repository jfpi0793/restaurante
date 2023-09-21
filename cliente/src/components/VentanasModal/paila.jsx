import React from "react";
import styled from "styled-components";
// import Cumplido from "../Img/check-green.gif"
// import Finalizar from "../Img/cross-logo.gif"
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import pafuera from "../Img/pafuera.jpg"


const Paila = () => {
  const navigate = useNavigate()
  const {logout} = useAuthContext()

  setTimeout(() => {
    logout()
  }, 1000);
  return (
    <div>
    <Fondo>
      <Container>
        <Salir>
        
        </Salir>
        <Mensaje>
          <h1 style={{margin:"0"}}>
            ¡¡Pa Fuera!!
          </h1>
        </Mensaje>
        <Exito></Exito>
      </Container>
    </Fondo>      
    </div>

  )
}

export default Paila

const Fondo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(05, 05, 05, .10);  
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  background-color: #ffffff;
  position: absolute;
  z-index: 0;
  height: 25em;
  width: 30em;
  border-radius: 2em;
  filter: drop-shadow(6px 15px 8px black);
`
const Salir = styled.div`
  /* background-color: aqua; */
  height: 5em;
  width: 30em;
  display: flex;
  justify-content: end;
`
const Salida = styled.button`
    /* background-color: transparent; */
    /* text-align: center; */
   
    background-size: cover;
    background-position: center;
    margin-bottom: 50em;
    border-radius: 2em;
    border: 3px solid black;
    height: 4em;
    width: 4em;
    margin: 1em;
`
const Mensaje = styled.div`
  /* background-color: aqua; */
  height: 4em;
  width: 30em;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Exito = styled.div`
  /* background-color: #ffffff; */
  background-image:url(${pafuera});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 16em;
  width: 30em;
  display: flex;
  align-items: center;
  justify-content: end;
`