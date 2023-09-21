import styled from "styled-components";
import nota from "../Img/Notas.jpg"


export const Fondo = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Select = styled.div`
    height: 50em;
    width: 90em;
`;

export const Titulo = styled.div`
    height: 5em;
    width: 90em;
    color: #ffff;
    text-align: center;
`;

export const Domicilio = styled.h1`
    margin: 0;
`;

export const Pedido = styled.div`
    height: 45em;
    width: 90em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-content: space-evenly;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
`;

export const Pendiente = styled.button`
    background-image: url(${nota});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    height: 30%;
    width: 80%;
    border: 0;
    box-shadow: 10px 10px 10px black;
    flex-grow: 1;
    flex-basis: 20%;
    margin-top: 1em;
    margin-left: 1em;
    margin-right: 1em;
    text-align: center;
`;

export const Regresar = styled.button`
    width: 10rem;
    height: 2rem;
    color: #fffafa;
    background-color: black;
    border: solid 1px;
    border-radius: 20px;
    font-style: italic;
    cursor: pointer;
    &:hover{
        background-color: #1f52e0;
    }
`