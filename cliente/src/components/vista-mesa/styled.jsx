import styled from "styled-components";
import piso from "../Img/piso.jpeg"

export const Container = styled.div`    
    height: 95vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    overflow-y: auto;
    @media (max-width: 768px) {
        flex-direction: row;
        align-items: flex-start; 
        background-size: cover; 
    }
`;

export const Salir = styled.div`
    background-image: url(${piso});
    background-size: cover;
    background-repeat: no-repeat;
    height: 3em;
    width: 119rem;
    display: flex;
    justify-content: end;
    @media (max-width: 768px) {
        width: 100%; 
        height: 2em; 
    }
`;

export const Salir2 = styled.button`
    background-color: transparent;
    text-align: center;
    font-size: 20px;
    height: 3em;
    width: 3em;
    @media (max-width: 768px) {
        font-size: 16px; 
    }
`;

export const Box = styled.button`
    width: 20rem;
    height: 20rem;
    margin: 5px;
    background-color: rgba(15, 15, 15, 0.37);
    box-shadow: -10px 15px 15px 0px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-color 0.3s, border-color 0.5s, transform 0.3s; 
    @media (max-width: 768px) {
        width: calc(60% - 10px);
        height: 15rem;
    }
    &:hover {
        background-color: transparent; 
        border: 2px solid #ffd700; 
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -50px;
    @media (max-width: 768px) {
    margin-top: -30px; 
}
`;

export const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s, border-color 0.5s, transform 0.3s;
    font-style: italic;
&:hover {
    background-color: #00d;
}
@media (max-width: 768px) {
    font-size: 14px; 
    padding: 8px 16px; 
}
`;
