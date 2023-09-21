import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 9%;
`;

export const Container2 = styled.div`
    height: 55rem;
    width: 51.2rem;
    display: flex;
    flex-direction: column;
    @media screen and ( max-width: 1500px){   
        width: 30rem;
    }
    @media screen and ( max-width: 1050px){   
        width: 28rem;
    }
    @media screen and ( max-width: 800px){   
        width: 25rem;
    }
`;

export const Box3 = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    border: solid 1px;
`;

export const Box = styled.div`
    height: 2rem;
    width: 20%;
    border: solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
    overflow: hidden;
`;

export const Box2 = styled.div`
    height: 2rem;
    width: 23%;
    border: solid 1px;
`;