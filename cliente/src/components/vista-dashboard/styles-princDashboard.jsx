import styled from "styled-components"


export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    @media  screen and (min-width: 1000px ) {
        overflow: auto;
    }
`;

export const Container = styled.div`
    width: 90%;
    height: 100%;
    border-radius: 5px;
    display: grid;
    gap: 15px;
    position: relative;
    right: 5%;
    grid-template:
        "header" 100px
        "navbar1" 50px
        "main1" 294vh
        "sidebar1" 400px
    ;
    @media  screen and (min-width: 300px ) {
    right: auto;
    width: 97%;
    grid-template:
        "header" 100px
        "navbar1" 50px
        "main1" 195vh
        "sidebar1" 400px        
    }
    @media  screen and (min-width: 600px ) {
    right: auto;
    width: 97%;
    grid-template:
        "header" 100px
        "navbar1" 50px
        "main1" 15vh
        "sidebar1" 180px        
        200px auto
    ;
    transition: 1s ease
    }
    @media  screen and (min-width: 700px ) {
    width: 97%;
    right: 2%;
    grid-template:
        "header header" 100px
        "navbar1 navbar1" 50px
        "sidebar1 main1" auto
        /
        200px auto
    ;
    transition: 1s ease
    }
    @media  screen and (min-width: 1000px ) {
    width: 97%;
    right: auto;
    grid-template:
        "header  header header"   100px
        "navbar1 main1    sidebar1" auto
        /
        200px     auto       200px
    ;
    transition-duration: 1s ease
    }
`;

export const Header = styled.div`
    background-color: white;
    width: 100%;
    height: 80%;
    border-radius: 5px;
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
`;

export const ContainerHeader = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    grid-area: header;
`;

export const CajaNav = styled.div`
    background-color: white;
    display: flex;
    grid-area: navbar1;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    @media  screen and (min-width: 1000px ) {
        flex-direction: column
    }
`;

export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: main1;
    border-radius: 5px;
    overflow: scroll;
`;

export const ContainerMenu = styled.div`
    background-color: white;
    grid-area: sidebar1;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`;

export const ContainerFooter = styled.div`
    background-color: white;
    grid-area: footer1;
    box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
`;

export const CajaLogo = styled.div`
    height: 40px;
    width: 30rem;
    display: flex;
    align-items: center;
`;

export const Boton = styled.button`
    height: 100%;
    width:120px;
    text-decoration: none;
    &:hover{
    box-shadow: 0 0 10PX black,0 0 40PX black, 0 0 80PX black;
    };
    &:focus{
    background-color: black;
    color: orange;
    text-shadow:  0 0 10PX orange,0 0 40PX orange, 0 0 80PX orange;
    }
    @media  screen and (min-width: 1000px ) {
        height: 50px;
        width:200px;
        text-decoration: none;
        border: none;
        background-color: transparent
    }
    
`;