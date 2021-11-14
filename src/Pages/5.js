import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const Container = styled.div`
  font-size: 24px;
  color: tomato;
`

const Hello = () => {
  const onClick = () => {
    window.alert("반갑습니다!")
  }
  return (
    <React.Fragment>
      <Header />
      <Container onClick={onClick}>안녕하세요</Container>
    </React.Fragment>
  );
}

export default Hello;