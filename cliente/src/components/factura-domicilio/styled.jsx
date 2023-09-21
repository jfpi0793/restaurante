import styled from "styled-components"

export const Background = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const ContPrincipal = styled.div`
    border: solid 1px;
    width: 60%;
    height: 80%;
    background-color: rgba(05, 05, 05, .5);  
    backdrop-filter: blur(10px);
    border-radius: 20px;
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const ContFactura = styled.div`
    height: 22rem;
    margin-bottom: 20px;
    padding-top: 20px;
    overflow-y: auto;
    border-bottom: dashed;
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        border-spacing: 0;
        @media (min-width: 768px) {
            margin-top: 20px;
        }
    }
    th, td {
        padding: 10px; 
        text-align: center;
        @media (min-width: 768px) {
            padding: 10px; 
        }
    }
    th {
        background-color: #f2f2f2;
    }
    tbody tr {
        margin-bottom: 10px;
        @media (min-width: 768px) {
            margin-bottom: 10px;
        }
    }
    
`;

export const ResPrecios = styled.div`
    padding: 20px;
    overflow-y: auto; 
    max-height: 30vh;
    font-size: 16px;
    @media (min-width: 768px) {
        max-height: initial;
        font-size: 20px;
    }
    
`;

export const ContBoton = styled.div`
    display: flex;
    justify-content: center;
`;

export const BotonImprimir = styled.button`
    color: #fffafa;
    background-color: black;
    border: solid 1px;
    border-radius: 20px;
    font-style: italic;
    cursor: pointer;
    &:hover{
        background-color: #1f52e0;
    }
`;