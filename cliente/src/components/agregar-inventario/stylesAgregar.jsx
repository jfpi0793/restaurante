import styled from "styled-components"


export const Background = styled.div`
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
  background-color: #087debdc;
  height: 95%;
  width: 90%;
  border-radius: 1em;
  box-shadow: 10px 10px 10px  black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 4em;
  padding: 2px;
  margin-bottom: 10rem;
  font-weight: bold;
`;

export const Logotipo = styled.img`
  background-color: #0b5aeec5;
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
  width: 90%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and ( max-width: 90vh){   
    height: 70%;
  }
`;

export const Name = styled.h3`
  color: #ffff;
  @media screen and ( max-width: 90vh){   
    font-size: 2.5em;
  }
`;

export const Infor = styled.input`
  width: 80%;
  height: 4em;
  border: 1px solid #ffff;
  background-color: transparent;
  border-radius: 5px;
  color: #ffffff;
  font-size: 2em;
`;

export const Entrar = styled.button`
  margin-top: 2em;
  color: #ffff;
  height: 10em;
  width: 14em;
  border: 1px solid #ffff;
  border-radius: 1em;
  background-color: transparent;
  font-size: 2em;
`;

export const ReContraseña = styled.h4`
  color: #ffff;
`;