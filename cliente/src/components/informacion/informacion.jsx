import React, { useEffect, useState } from "react";
import Axios from "axios"

import { Container, ConteCarrusel, Contenedor } from "./styled";

const Informacion = () => {
  const [informacion, setInformacion] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % total);
  };
  const prevImage = () => {
    setCurrentImage((currentImage - 1 + total) % total);
  };
  useEffect(() => {
    Axios.get("http://localhost:3002/api/informacion")
      .then((response) => {
        setInformacion(response.data);
        setTotal(response.data.length);
      })
      .catch(error => {
      });
  }, []);
  setTimeout(() => {
  nextImage();
  }, 3000);

  return (
    <>
      <Container>
        <ConteCarrusel>
          <div style={{textAlign:"center" }}>
            {informacion.map((infor, index) => (
              <Contenedor
                key={index}
                style={{
                  backgroundImage: `url(http://localhost:3002/${infor.imagen})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  display: index === currentImage ? "block" : "none",
                }}>
                <h1 style={{fontSize:"5em",filter: "drop-shadow(-5px 5px 1px #000000)"}}>{infor.Titulo}</h1>
                <h2 style={{fontSize:"2em",filter: "drop-shadow(-5px 5px 1px #000000)"}}>{infor.Informacion}</h2>
                <h3 style={{fontSize:"1.5em",filter: "drop-shadow(-5px 5px 1px #000000)"}}>{infor.noticia}</h3>
              </Contenedor>
            ))}
          </div>
        </ConteCarrusel>
      </Container>
    </>
  );
};

export default Informacion;