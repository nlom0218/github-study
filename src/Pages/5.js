import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import { BasicContainer } from './BasicConainer';

const Container = styled.div`
  justify-self: start;
  grid-column: 2 / 4;
  row-gap: 1 / 3;
  color: tomato;
  font-size: 40px;
`

const Btn = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  color: tomato;
  margin-bottom: 30px;
`

const Hello = () => {
  const [title, setTitle] = useState("hello")
  const [num, setNum] = useState(0)

  const onClickName = () => {
    if (title === "hello") {
      setTitle("bye")
    } else {
      setTitle("hello")
    }
  }

  const onClickBtn = (mode) => {
    if (mode === "plus") {
      setNum(prev => prev + 1)
    } else if (mode === "minus") {
      setNum(prev => prev - 1)
    }
  }

  return (
    <BasicContainer>
      <Header />
      <Container onClick={onClickName}>
        {title}
      </Container>
      <div>
        {num}
        <Btn onClick={() => onClickBtn("plus")}>+</Btn>
        <Btn onClick={() => onClickBtn("minus")}>-</Btn>
      </div>
    </BasicContainer>
  );
}

export default Hello;