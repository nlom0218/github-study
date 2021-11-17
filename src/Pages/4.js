import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const BasicContainer = styled.div`
    display:grid;
    grid-template-columns: 2fr 1fr 3fr;
    justify-items: center;
    `
const Container =styled.div`
    font-size: 50px;
    grid-column:2/4;
    row-gap:1/3;
    background-color:tomato;
    justify-self : start;`

const Btn = styled.div`
    width: 1cm;
    height: 1cm;
    font-size: 30px;
    background-color: lightblue;
    cursor: pointer;
    justify-self:center;
    `

const Four = () => {

const [num,setNum] = useState(0)

const onClickBtn= (mode)=> {
    if (mode === "plus") {
        setNum(prev => prev +1)
    } else if (mode === "minus") {
        setNum(prev => prev -1)
    }else if (mode === "reset"){
        setNum(0)
    }
}

    return ( 
    <BasicContainer>
    <Header />
    <Container>
    {num}
        </Container>
        <div>
            <Btn onClick={()=>onClickBtn("plus")}>+</Btn>
            <Btn onClick={()=>onClickBtn("minus")}>-</Btn>
            <Btn onClick={()=>onClickBtn("reset")}>0</Btn>
        </div>
    </BasicContainer>
     );

    }
export default Four;