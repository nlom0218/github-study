import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: center;
`

const Box = styled.div`
  width: 180px;
  background: tomato;
  padding: 30px;
  color: white;
  font-size: 24px;
  display: grid;
  row-gap: 10px;
  .btn {
    background: white;
    color: tomato;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
  }
`

const Content = styled.div`
  text-align: center;
`

const PlusBtn = styled.div`
`

const MinusBtn = styled.div`
`

const ResetBtn = styled.div`
`

const Hello = () => {
  const [num, setNum] = useState(0)
  const onClick = (mode) => {
    if (mode === "plus") {
      setNum(prev => prev + 1)
    } else if (mode === "minus") {
      setNum(prev => prev - 1)
    } else {
      setNum(0)
    }
  }
  return (
    <Container>
      <Header />
      <Box>
        <Content>현재 숫자는 {num}</Content>
        <PlusBtn className="btn" onClick={() => onClick("plus")}>+</PlusBtn>
        <MinusBtn className="btn" onClick={() => onClick("minus")}>-</MinusBtn>
        <ResetBtn className="btn" onClick={() => onClick("reset")}>초기화</ResetBtn>
      </Box>
    </Container>
  );
}

export default Hello;