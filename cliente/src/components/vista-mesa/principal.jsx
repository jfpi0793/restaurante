import React, { useState } from "react";
import { Container, Box, ButtonContainer, Button } from "./styled"; 
import { useNavigate } from "react-router-dom";
import { useDataState } from "./data.context/data.state.context";
import mesa from "../Img/mesa.png";
import Factura from "../vista-factura/principal";
import mesaFunctions from "./mesa.services/mesa.services";

const VistaMesa = () => {
  const navigate = useNavigate();
  const Mesa = [
    { imagen: mesa, nombre: "Mesa 1" },
    { imagen: mesa, nombre: "Mesa 2" },
    { imagen: mesa, nombre: "Mesa 3" },
    { imagen: mesa, nombre: "Mesa 4" },
    { imagen: mesa, nombre: "Mesa 5" },
    { imagen: mesa, nombre: "Mesa 6" },
    { imagen: mesa, nombre: "Mesa 7" },
    { imagen: mesa, nombre: "Mesa 8" },
  ];
  const { mesaData, setMesaData } = useDataState();
  const [selectedTableIndex, setSelectedTableIndex] = useState(-1);
  const [showFactura, setShowFactura] = useState(false);
  const [reservas, setReservas] = useState(Array(Mesa.length).fill({ Producto: "", Cantidad: "", Total: 0 }));
  const [mesaOcupada, setMesaOcupada] = useState(Array(Mesa.length).fill(false));

  const handleTableClick = (mesaNumber) => {
    if (!mesaOcupada[mesaNumber - 1]) {
      setSelectedTableIndex(mesaNumber - 1);
      sendReservationData(mesaNumber, reservas);
    }
  };

  const sendReservationData = async (mesaNumber, reservas) => {
    try {
      const mesaDataResponse = await mesaFunctions.getMesa(mesaNumber);
      setMesaData(mesaDataResponse);
      navigate("/private/todofisica/factura/:di");
    } catch (error) {
      console.error("Error sending reservation data:", error);
    }
  };

  const handleBackToOrdenClick = () => {
    navigate("/private/todofisica/fisica");
  };

  return (
    <>
      <Container>
        {Mesa.slice(1).map((p, index) => (
          <React.Fragment key={index}>
            <Box
              style={{
                backgroundImage: `url(${p.imagen})`,
                backgroundSize: "cover",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => handleTableClick(index + 1)}
            >
              <span style={{ position: "absolute", top: "10px", left: "10px", color: "white" }}>
                Mesa {index + 1}
              </span>
            </Box>
          </React.Fragment>
        ))}
        <Box
          style={{
            backgroundImage: `url(${Mesa[7].imagen})`,
            backgroundSize: "cover",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => handleTableClick(8)}
        >
          <span style={{ position: "absolute", top: "10px", left: "10px", color: "white" }}>
            Mesa 8
          </span>
        </Box>
      </Container>
      <ButtonContainer>
        <Button onClick={handleBackToOrdenClick}>
          Regresar al menu
        </Button>
      </ButtonContainer>
      {showFactura && <Factura mesa={selectedTableIndex + 1} reservas={reservas} />}
    </>
  );
};

export default VistaMesa;