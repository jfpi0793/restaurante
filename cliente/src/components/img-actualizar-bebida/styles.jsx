import styled from "styled-components";

export const Fondo = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 1000;
display: flex;
justify-content: center;
align-items: center;
`
export const Container = styled.div`
background-color:  #12011d;
position: absolute;
z-index: 0;
height: 33em;
width: 30em;
border-radius: 2em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

filter: drop-shadow(6px 15px 8px black);
`
export const Salir = styled.div`
/* background-color: aqua; */
height: 5em;
width: 30em;
display: flex;
justify-content: end;
`
export const Salida = styled.button`
/* background-color: transparent; */
/* text-align: center; */
background-color: #141414;
background-size: cover;
background-position: center;
margin-bottom: 50em;
border: none;
border-radius: 2em;
height: 4em;
width: 4em;
margin: 1em;
color: #ffffff6a;
&:hover{
    background-color: #ff0000;
    box-shadow: 0 0 10PX red,0 0 40PX red, 0 0 80PX red;
    color: white;
    text-shadow: 0 0 10PX white,0 0 40PX white, 0 0 80PX white;
    };
`
export const Mensaje = styled.div`
/* background-color: aqua; */
height: 4em;
width: 30em;
display: flex;
align-items: center;
justify-content: center;
color: #ffffff;
text-shadow: 0 0 10PX #A945C7,0 0 40PX #A945C7, 0 0 80PX #A945C7;
`
export const Form = styled.div`
background-color: #c8c7c9;

background-size: contain;
background-repeat: no-repeat;
background-position: center;
height: 19em;
width: 30em;
display: flex;
align-items: center;
justify-content: end;
`

export const ConInfor = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
/* background-color: aqua; */
/* @media screen and ( max-width: 90vh){   
    height: 70%;
    width: 20em; 
} */
`;

export const Infor = styled.input`
width: 23em;
height: 2em;
border: 1px solid #ffff;
background-color: transparent;
border-radius: 5px;
color: #12011d;
@media screen and ( max-width: 90vh){   
    height: 2em;
    width: 20em; 
}
`;

export const Div = styled.div`
    
    width: 13em;
    height: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InforImg = styled.input`
    border: none;
    font-family: 'Indie Flower', cursive;
`;

export const SpanImg = styled.span`

`;

export const LabelImg = styled.label`
     height: 50px;
    width: 85px;
    /* background-color: red; */
    background-repeat: no-repeat;
    background-size: 89%;
    background-position: center;
    border-radius: 8%;
    background-color: #12011d ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #7c7b7b;
    &:hover{
    color: white;
    background: #A945C7;
    box-shadow: 0 0 10PX #A945C7,0 0 40PX #A945C7, 0 0 80PX #A945C7;
    }
`;

export const ContentImg = styled.div`
    height: 200px;
    width: 200px;
    
    background-color: #acacac6e;
    background-repeat: no-repeat;
    background-size: 97%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @media  screen and (max-height: 600px ) {
    
    height: 210px;
    width: 150px;
    }
`;

export const ImgPlato = styled.img`
    height: 180px;
    width: 160px;
    margin-right: 15px;
    
    position: relative;
    left: 3%;
    top: 1%;
    @media  screen and (max-height: 600px ) {
    
    height: 100px;
    width: 95px;
    left: 4%;
    }
`;

export const Nota = styled.div`

`;