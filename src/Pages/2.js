import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const BasicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`

const Container = styled.div`
  justify-self: start;
  grid-column: 2 / 4;
  color: tomato;
  font-size: 40px;
`


const Btn = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightblue;
  font-size: 30px;
  color : black;
  margin-bottom: 150px;
  `

const SHJ = () => {
    const [title, setTitle] = useState("hello")
    const [num, setNum] = useState(0)

    const onClickName = () => {
        if(title === "hello") {
            setTitle("bye")
        } else {
        setTitle("hello")
        }
    }

    const onClickBtn = (mode) => {
        if (mode ==="plus") {
            setNum(prev => prev +1)
        } else if (mode === "minus") {
            setNum(prev => prev -1) 
        } else if (mode === "reset") {
            setNum( 0 )
        }
    }
    
    return(
      <BasicContainer>
        <Header />
        <Container onClick={onClickName}>
          {title}    
        </Container>
        <div>
            {num}
            <Btn onClick={() => onClickBtn("plus")}>+</Btn>
            <Btn onClick={() => onClickBtn("minus")}>-</Btn>
            <Btn onClick={() => onClickBtn("reset")}>리셋</Btn>
        </div>
       </BasicContainer>
    );
}
 
export default SHJ;