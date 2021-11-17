import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const Container = styled.div`
font-size: 24px;
color: tomato;
`

const ButtonBox = styled.div`
display: flex;
justify-content: center;

border-radius: 30px;
background-color: black;
font-size: 50px;
color: red;
div {
  padding: 100px;
}
.left-btn:hover {
  color: yellow;
  font-size: 4rem;
  background-color: blue;
  cursor:pointer;
}
.right-btn:hover {
  color: yellow;
  font-size: 4rem;
  background-color: blue;
  cursor:pointer;
}
`

const Intro = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding: 100px;
  background-color: orange;
  font-size: 30px;

  .greeting:hover {
    color: blue;
    cursor: pointer;
    font-size: 40px;
  }

  .today:hover {
    color: red;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  margin-top: 50px;
  border: 1px solid red;
  border-radius: 15px;
  button {
    background-color: white;
    border-radius: 20px;
    padding: 10px;
  }
  button:hover {
    background-color: yellow;
    font-weight: bold;
  }
`

const Three = () => {
  const handleClick = () => {
    window.alert('HELLO');
  }

  const onButtonClick = () => {
    alert('BUTTON CLICK');
  }

  return (
    <React.Fragment>
      <Header />
      <span>BROWSER FOR TEACHER</span>
      <Container onClick={handleClick}>안녕하세요~! 오</Container>
      <ButtonBox onClick={onButtonClick}>
        <div class='left-btn'>
          LEFT
        </div>
        <div class='right-btn'>
          RIGHT
        </div>
      </ButtonBox>
      <Intro>
        <div class='greeting'>
          GOOD MORNING<br />
          How are you <span class='today'>today</span>?
        </div>
      </Intro>
      <Footer>
        <button class='footer-left-btn'>좋아요</button>
        <span>&copy; 교사용 브라우저 </span>
        <button class='footer-right-btn'>아쉬워요</button>
      </Footer>
    </React.Fragment>
  );
}

export default Three;