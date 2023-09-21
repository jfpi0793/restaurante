import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from "axios"

import tablap from "../Img/bandeja.png"

import { Container, Box2,Box3, Container2, Minibox1} from "./Styled"

export const Fisica = () => {
const [sancocho, setSancocho] = useState([])
const [corriente, setCorriente] = useState([])
const [bebida, setBebida] = useState([])
const platosSancocho = () => {
    Axios.get("http://localhost:3002/api/platosSancocho").then((response)=>{
        setSancocho(response.data)
    })
    .catch(error => {
    })
}
const platosCorriente = () => {
    Axios.get("http://localhost:3002/api/platosCorriente").then((response)=>{
        setCorriente(response.data)
    })
    .catch(error => {
    })
}
const bebidas = () => {
    Axios.get("http://localhost:3002/api/bebidas").then((response) => {
        setBebida(response.data)
        console.log(response.data,'🥗')
    })
    .catch(error => {
    })
}
// const Compra = () => {
//     Axios.get("http://localhost:3002/api/compras")
//         .then((response) => {     
//         if (response.data.length > 0){
//             setNotificacion(response.data.length)
//         } else {
//         }
//         Compra();
//         })
//         .catch(error => {
//         }); 
// }
useEffect(()=>{
    platosSancocho()
    platosCorriente()
    bebidas()
    // Compra()
},[])

return(
<Container>
    <Container2>
        <h1 style={{WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black", color:"#ffffff", marginLeft:"3em", filter: "drop-shadow(-10px 25px 15px black)"}}>SANCOCHOS</h1>
        <Box2>
            {sancocho.map((comida, index)=>
            <Link to={`/private/todofisica/pedidofisica/${comida.id_plato}`} key={index} style={{textDecoration:"none"}}> 
            <Minibox1  key={index}>
                <img 
                src={"http://localhost:3002/" + comida.imagen} alt={comida.nombre_plato} style={{width:"15rem", filter: "drop-shadow(-15px 15px 10px black)", cursor:"pointer"}}></img>
                <div style={{backgroundImage:`url(${tablap}`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center",width:"20rem",height:"7.5rem",justifyContent:"center",alignItems:"center",opacity:"0.8", cursor:"pointer",filter: "drop-shadow(-8px 10px 3px black)"}}>
                    <h4 style={{margin:"0",marginTop:"3rem",fontSize:"20px", cursor:"pointer"}}> {comida.nombre_plato} </h4>
                    <h4 style={{margin:"0",fontSize:"20px", cursor:"pointer"}}> {comida.precio} </h4>
                </div>
            </Minibox1>                           
            </Link>
            )}
        </Box2>
        <h1 style={{WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black", color:"#ffffff", marginLeft:"3em", filter: "drop-shadow(-10px 25px 15px black)"}}>CORRIENTES</h1>
        <Box2> 
            {corriente.map((comida, index)=>
            <Link to={`/private/todofisica/pedidofisica/${comida.id_plato}`} key={index} style={{textDecoration:"none"}} >
                <Minibox1 key={index}>
                    <img src={"http://localhost:3002/" + comida.imagen} alt={comida.nombre} style={{width:"15rem", filter: "drop-shadow(-15px 15px 10px black)", cursor:"pointer"}}></img>
                    <div style={{backgroundImage:`url(${tablap}`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center",width:"20rem",height:"7.5rem",justifyContent:"center",alignItems:"center",opacity:"0.8",filter: "drop-shadow(-8px 10px 3px black)", cursor:"pointer"}}>
                        <h4 style={{margin:"0",marginTop:"3rem",fontSize:"20px", cursor:"pointer"}}> {comida.nombre_plato} </h4>
                        <h4 style={{margin:"0",fontSize:"20px", cursor:"pointer"}}> {comida.precio} </h4>
                    </div>
                </Minibox1>
            </Link>
            )}
        </Box2>
        <h1 style={{ WebkitTextStroke:"1.1px black",fontWeight:"bold",textShadow:"5px 5px 5px black", color:"#ffffff", marginLeft:"3em", filter: "drop-shadow(-10px 25px 15px black)"}}>BEBIDAS</h1>
        <Box3>
            {bebida.map((jugo,index) =>
            <Link to={`/private/todofisica/bebidafisica/${jugo.id_bebida}`} key={index} style={{textDecoration:"none"}}>
                <Minibox1 key={index}>
                    <img src={"http://localhost:3002/" + jugo.imagen} alt={jugo.nombre_bebida} style={{width:"15rem", filter: "drop-shadow(-15px 15px 10px black)", cursor:"pointer"}}></img>
                    <div style={{backgroundImage:`url(${tablap}`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center",width:"20rem",height:"7.5rem",justifyContent:"center",alignItems:"center", opacity:"0.8",filter: "drop-shadow(-8px 10px 3px black)",marginLeft:"13px", cursor:"pointer"}}>
                        <h4 style={{margin:"0", marginTop:"3rem",fontSize:"20px", cursor:"pointer"}}> {jugo.nombre_bebida}</h4>
                        <h4 style={{margin:"0",fontSize:"20px", cursor:"pointer"}}> {jugo.precio}</h4>
                    </div>
                </Minibox1>
            </Link> 
            )}  
        </Box3>
    </Container2>
</Container>
)
}