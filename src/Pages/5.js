import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-items: center;
  background: url("https://source.unsplash.com/random/1920*1080?city");
  background-size: cover;
  background-position: center;
`

const Layout = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  align-items: flex-start;
  .box {
    width: 180px;
    background: tomato;
    padding: 30px;
    color: white;
    font-size: 24px;
    display: grid;
    row-gap: 10px;
  }
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

  const processCom = () => {
    const num = Math.floor(Math.random() * 10) % 3
    if (num === 0) {
      return "가위"
    } else if (num === 1) {
      return "바위"
    } else {
      return "보"
    }
  }
  const [com, setCom] = useState(processCom())
  const [you, setYou] = useState(null)
  const [see, setSee] = useState(false)

  const onClickBox2 = (choic) => {
    setSee(true)
    setYou(choic)
  }
  const processResult = () => {
    if (com === "가위") {
      if (you === "가위") {
        return "비김"
      } else if (you === "바위") {
        return "이김"
      } else {
        return "짐"
      }
    } else if (com === "바위") {
      if (you === "가위") {
        return "짐"
      } else if (you === "바위") {
        return "비김"
      } else {
        return "이김"
      }
    } else {
      if (you === "가위") {
        return "이김"
      } else if (you === "바위") {
        return "짐"
      } else {
        return "비김"
      }
    }
  }
  const onClickReset = () => {
    setCom(processCom())
    setYou(null)
    setSee(false)
  }
  return (
    <Container>
      <Header />
      <Layout>
        <div className="box">
          <Content>현재 숫자는 {num}</Content>
          <div className="btn" onClick={() => onClick("plus")}>+</div>
          <div className="btn" onClick={() => onClick("minus")}>-</div>
          <div className="btn" onClick={() => onClick("reset")}>초기화</div>
        </div>
        <div className="box">
          <Content>컴퓨터: {see && com}</Content>
          <Content>당신: {see && you}</Content>
          <div className="btn" onClick={() => onClickBox2("가위")}>가위</div>
          <div className="btn" onClick={() => onClickBox2("바위")}>바위</div>
          <div className="btn" onClick={() => onClickBox2("보")}>보</div>
          <Content>결과: {see && processResult()}</Content>
          {see && <div className="btn" onClick={onClickReset}>다시하기</div>}
        </div>
      </Layout>
    </Container>
  );
}

export default Hello;