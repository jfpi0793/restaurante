import styled from "styled-components"
import Fondo from "../Img/Restauran.jpg"

export const Background = styled.div`
  background-image: url(${Fondo});
  background-size: cover;
  height: 100vh;
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
  background-color: #434649c5;
  height: 40em;
  width: 30em;
  border-radius: 1em;
  box-shadow: 10px 10px 10px  black;
  @media screen and ( max-width: 90vh){   
    height: 31em;
    width: 20em; 
  }
`;

export const ConTitulo = styled.div`
  height: 5em;
  display: flex;
  text-align: center;
`;

export const Titulo = styled.h1`
  font-family: 'Katibeh', cursive;
  color: #f1f1f1;
  font-size: 2em;
  padding: 10px;
  @media screen and ( max-width: 90vh){   
    font-size: 2em;
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
  height: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and ( max-width: 90vh){   
    height: 25em;
    width: 20em; 
  }
`;

export const Name = styled.h3`
  color: #ffff;
  @media screen and ( max-width: 90vh){   
    font-size: 1em;
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
  width: 5em;
  border: 1px solid #ffff;
  border-radius: 1em;
  background-color: transparent;
`;

export const ReContraseña = styled.h4`
  color: #ffff;
`;