import styled from "styled-components";
import { Boton } from "../vista-dashboard/styles-princDashboard";


export const Contenedor = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 480px){
    
    height: 100em;   

}
`


export const Main = styled.main`
    @media (max-width: 480px){
    
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
`

export const Tabla = styled.table`
        border-collapse: collapse;
    border-radius: 2px solid #0099ff;
    border-right: 2px solid #0099ff;
    border-left: 2px solid #0099ff;
    border-bottom: 2px solid #0099ff;
`
export const Thead = styled.thead`
    background-color: #0099ff;
    color: white;
    height: 40px;
`

export const Tr = styled.tr`
   
`
export const Th = styled.th`
padding: 5px 10px;
`
export const Tbody = styled.tbody`
    background-color: white;
`
export const Td = styled.td`
padding: 5px 10px;
text-align: start;
`

export const Borrar = styled.button`
    
`;