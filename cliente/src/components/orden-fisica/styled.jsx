import styled from "styled-components"
import fondo from "../Img/orden123.jpg"
import fondo2 from "../Img/picar.png"

export const Container = styled.div`
    backdrop-filter: blur(8px); 
    background-image: url(${fondo});
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.51);
    color: #000000;
    -webkit-text-stroke: 0.1px #000000;
    height: 50em;
    width: 30em;
    border-radius: 2em 2em 0 0;
    position: absolute;
    z-index: 1;
    margin-bottom: -4em;
    margin-left: 33em;
    bottom: 0;
    left: 0;
    filter: drop-shadow(10px 20px 15px black);
    box-shadow: -10px 0px 10px black;
`;

export const Titulo = styled.h1`
    height: 2em;
    width: 15em;
    margin: 0;
    border-radius: 1em 1em 0 0;
    text-align: center;
    filter: drop-shadow(7px 10px 10px black);
`;

export const ConTitulos = styled.div`
    background-image: url(${fondo2});
    background-size: cover;
    background-position: center;
    height: 5em;
    width: 30em;
    margin: 0;
    text-align: center;
    filter: drop-shadow(7px 10px 10px black);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Conten = styled.div`
    max-height: 36em;
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

export const Titulos = styled.h3`
    filter: drop-shadow(7px 10px 5px black);
`;

export const Eliminar = styled.button`
    height: 4em;
    width: 4em;
    border-radius: 2em;
    filter: drop-shadow(7px 10px 10px black);
`;

export const Pedir = styled.button`
    background-color: #ffffff;
    height: 4em;
    width: 9em;
    border-radius: 2em;
    filter: drop-shadow(7px 10px 10px black);
`;