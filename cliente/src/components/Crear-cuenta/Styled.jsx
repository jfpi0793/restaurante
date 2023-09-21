import styled from "styled-components"
import Fondo from "../Img/Restauran.jpg"

export const Background = styled.div`
  background-image: url(${Fondo});
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and ( max-width: 90vh){   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Login = styled.form`
  background-color: rgba(05, 05, 05, .5);  
  backdrop-filter: blur(5px);
  height: 95%;
  width: 30em;
  border-radius: 1em;
  box-shadow: 10px 10px 10px  black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and ( max-width: 90vh){
    height: 80%;
    width: 20em; 
  }
`;

export const ConTitulo = styled.div`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  font-family: 'Katibeh', cursive;  
  color: #f1f1f1;
  font-size: 1.5em;
  padding: 2px;
  margin: 0;
  @media screen and ( max-width: 90vh){   
    font-size: 1.3em;
    padding: 7px;
  }
`;

export const Logotipo = styled.img`
  background-color: #434649c5;
  height: 30em;
  width: 40em;
  box-shadow: 2px 1px 10px black;
  border-radius: 2em;
  margin-right: 5em;
  @media screen and ( max-width: 95vh){   
    height: 10em;
    width: 20em;
    margin: 0;
  }
`;

export const ConInfor = styled.div`
  width: 30em;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and ( max-width: 90vh){   
    height: 70%;
    width: 20em; 
  }
`;

export const Name = styled.h3`
  color: #ffff;
  @media screen and ( max-width: 90vh){   
    font-size: 0.8em;
  }
`;

export const Infor = styled.input`
  width: 23em;
  height: 2em;
  border: 1px solid #ffff;
  background-color: transparent;
  border-radius: 5px;
  color: #c0c0c0;
  @media screen and ( max-width: 90vh){   
    height: 2em;
    width: 20em; 
  }
`;

export const Entrar = styled.button`
  margin-top: 2em;
  color: #ffff;
  height: 2em;
  width: 8em;
  border: 1px solid #ffff;
  border-radius: 1em;
  background-color: transparent;
`;

export const ReContraseña = styled.h4`
  color: #ffff;
`;