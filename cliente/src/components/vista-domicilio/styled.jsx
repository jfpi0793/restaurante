import styled from "styled-components"
import fondoPedido from "../Img/repartidor.jpeg"

export const Container = styled.div`
    height: 97vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${fondoPedido});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Conatiner2 = styled.div`
    height: 37rem;
    width: 50rem;
    border: solid 2px;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(5px); 
    background-color: rgba(44, 44, 44, 0.2); 
    box-shadow: -10px 15px 15px 0px;
    @media screen and (max-width: 60rem) {
        width: 40rem;
    }
    @media screen and (max-width: 50rem) {
        width: 30rem;
    }
    @media screen and (max-width: 40rem) {
        width: 20rem;
    }
`;

export const Container3 = styled.div`
    width: 50rem;
    height: 20rem;
    display: flex;
    justify-content: center;
`;

export const Box = styled.div`
    width: 20rem;
    height: 3rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

export const Box2 = styled.div`
    width: 40rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    @media screen and (max-width: 40rem) {
        width: 20rem;
        text-align: center;
    }
`;

export const Box3 = styled.div`
    width: 23rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: white;
    padding-left: 10px;
    @media screen and (max-width: 60rem) {
        width: 17rem;
    }
    @media screen and (max-width: 50rem) {
        width: 12rem;
    }
    @media screen and (max-width: 40rem) {
        width: 8rem;
    }
`;

export const Box4 = styled.div`
    width: 25rem;
    height: 23rem;
    display: flex;
    flex-direction: column;
    color: white;
    @media screen and (max-width: 60rem) {
        width: 20rem;
    }
    @media screen and (max-width: 50rem) {
        width: 17rem;
    }
    @media screen and (max-width: 40rem) {
        width: 11rem;
    }
`;

export const Salir = styled.button`
    background-color: transparent;
    text-align: center;
    margin-bottom: 50em;
    border-radius: 2em;
    border: 3px solid black;
    height: 4em;
    width: 4em;
`;