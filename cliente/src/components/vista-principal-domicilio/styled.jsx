import styled from "styled-components"

import { keyframes } from 'styled-components';

const sinkAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
`;

export const Box2 = styled.div`
    height: 15rem;
    width: 115.5rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 20px;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar-thumb {
    background: #000000; 
    border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
    @media screen and (max-width: 115rem){
        width: 114rem;
    }
    @media screen and (max-width: 114rem){
        width: 113rem;
    }
    @media screen and (max-width: 113rem){
        width: 109rem;
    }
    @media screen and (max-width: 112rem){
        width: 107rem;
    }
    @media screen and (max-width: 111rem){
        width: 105rem;
    }
    @media screen and (max-width: 110rem){
        width: 103rem;
    }
    @media screen and (max-width: 109rem){
        width: 101rem;
    }
    @media screen and (max-width: 108rem){
        width: 99rem;
    }
    @media screen and (max-width: 107rem){
        width: 97rem;
    }
    @media screen and (max-width: 106rem){
        width: 95rem;
    }
    @media screen and (max-width: 105rem){
        width: 93rem;
    }
    @media screen and (max-width: 104rem){
        width: 91rem;
    }
    @media screen and (max-width: 103rem){
        width: 89rem;
    }
    @media screen and (max-width: 102rem){
        width: 87rem;
    }
    @media screen and (max-width: 101rem){
        width: 85rem;
    }
    @media screen and (max-width: 100rem){
        width: 83rem;
    }
    @media screen and (max-width: 99rem){
        width: 81rem;
    }
    @media screen and (max-width: 98rem){
        width: 79rem;
    }
    @media screen and (max-width: 97rem){
        width: 75rem;
    }
    @media screen and (max-width: 96rem){
        width: 73rem;
    }
    @media screen and (max-width: 95rem){
        width: 71rem;
    }
    @media screen and (max-width: 94rem){
        width: 69rem;
    }
    @media screen and (max-width: 93rem){
        width: 67rem;
    }
    @media screen and (max-width: 92rem){
        width: 65rem;
    }
    @media screen and (max-width: 91rem){
        width: 63rem;
    }
    @media screen and (max-width: 90rem){
        width: 61rem;
    }
    @media screen and (max-width: 88rem){
        width: 59rem;
    }
    @media screen and (max-width: 87rem){
        width: 55rem;
    }
    @media screen and (max-width: 85rem){
        width: 51rem;
    }
    @media screen and (max-width: 81rem){
        width: 49rem;
    }
    @media screen and (max-width: 79rem){
        width: 48rem;
    }
    @media screen and (max-width: 77rem){
        width: 46rem;
    }
    @media screen and (max-width: 76rem){
        width: 44rem;
    }
    @media screen and (max-width: 75rem){
        width: 41rem;
    }
    @media screen and (max-width: 73rem){
        width: 38rem;
    }  
    @media screen and (max-width: 70rem){
        width: 35rem;
    }  
    @media screen and (max-width: 68rem){
        width: 32rem;
    }  
    @media screen and (max-width: 65rem){
        width: 29rem;
    }  
    @media screen and (max-width: 62rem){
        width: 25rem;
    }  
    @media screen and (max-width: 59rem){
        width: 22rem;
    }  
`;

export const Box3 = styled.div`
    height: 15rem;
    width: 115.5rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 20px;
    margin-bottom: 2rem;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
    @media screen and (max-width: 115rem){
        width: 114rem;
    }
    @media screen and (max-width: 114rem){
        width: 113rem;
    }
    @media screen and (max-width: 113rem){
        width: 109rem;
    }
    @media screen and (max-width: 112rem){
        width: 107rem;
    }
    @media screen and (max-width: 111rem){
        width: 105rem;
    }
    @media screen and (max-width: 110rem){
        width: 103rem;
    }
    @media screen and (max-width: 109rem){
        width: 101rem;
    }
    @media screen and (max-width: 108rem){
        width: 99rem;
    }
    @media screen and (max-width: 107rem){
        width: 97rem;
    }
    @media screen and (max-width: 106rem){
        width: 95rem;
    }
    @media screen and (max-width: 105rem){
        width: 93rem;
    }
    @media screen and (max-width: 104rem){
        width: 91rem;
    }
    @media screen and (max-width: 103rem){
        width: 89rem;
    }
    @media screen and (max-width: 102rem){
        width: 87rem;
    }
    @media screen and (max-width: 101rem){
        width: 85rem;
    }
    @media screen and (max-width: 100rem){
        width: 83rem;
    }
    @media screen and (max-width: 99rem){
        width: 81rem;
    }
    @media screen and (max-width: 98rem){
        width: 79rem;
    }
    @media screen and (max-width: 97rem){
        width: 75rem;
    }
    @media screen and (max-width: 96rem){
        width: 73rem;
    }
    @media screen and (max-width: 95rem){
        width: 71rem;
    }
    @media screen and (max-width: 94rem){
        width: 69rem;
    }
    @media screen and (max-width: 93rem){
        width: 67rem;
    }
    @media screen and (max-width: 92rem){
        width: 65rem;
    }
    @media screen and (max-width: 91rem){
        width: 63rem;
    }
    @media screen and (max-width: 90rem){
        width: 61rem;
    }
    @media screen and (max-width: 88rem){
        width: 59rem;
    }
    @media screen and (max-width: 87rem){
        width: 55rem;
    }
    @media screen and (max-width: 85rem){
        width: 51rem;
    }
    @media screen and (max-width: 81rem){
        width: 49rem;
    }
    @media screen and (max-width: 79rem){
        width: 48rem;
    }
    @media screen and (max-width: 77rem){
        width: 46rem;
    }
    @media screen and (max-width: 76rem){
        width: 44rem;
    }
    @media screen and (max-width: 75rem){
        width: 41rem;
    }
    @media screen and (max-width: 73rem){
        width: 38rem;
    }  
    @media screen and (max-width: 70rem){
        width: 35rem;
    }  
    @media screen and (max-width: 68rem){
        width: 32rem;
    }  
    @media screen and (max-width: 65rem){
        width: 29rem;
    }  
    @media screen and (max-width: 62rem){
        width: 25rem;
    }  
    @media screen and (max-width: 59rem){
        width: 22rem;
    }  
`;

export const Box4 = styled.div`
    height: 15rem;
    width: 117.1rem;
    display: flex;
    justify-content: space-evenly;                            
    flex-wrap: wrap;
    background-color: #006eff;
    align-items: center;
    font-size: 20px;
    margin-bottom: 2rem;
`;

export const Container2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Minibox1 = styled.button`
    width: 36rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-content: space-evenly;
    color: white;
    background: none;
    animation: ${sinkAnimation} 0.3s ease-in-out ;
    &:active {
    animation: none; 
    transform: translateX(2px);
    }
    border: none;
    margin-left: 50px;
`;
