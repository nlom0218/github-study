import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const TypeSelectBox = styled.div`
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
const Nav = styled.div`
  background-color: rgba(0,0,0,0.5);
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .nav__left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 100%;
    background-color: blue;
    color: yellow;
  }
  .nav__left:hover {
    font-weight: bold;
    color: red;
    font-size: 1.2em;
  }
  .nav__center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 100%;
    background-color: black;
    color: yellow;
  }
  .nav__center:hover {
    font-weight: bold;
    color: red;
    font-size: 1.2em;
  }
  .nav__right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 100%;
    background-color: yellow;
  }
  .nav__right:hover {
    font-weight: bold;
    color: red;
    font-size: 1.2em;
  }
`


const Timetable = styled.div`
  height: 120px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  background-color: yellow;
  font-size: 30px;

  .weekday {
    display: flex;
    flex-direction: column;
    padding: 10px 25px;
    border: 1px solid red;
    border-radius: 30px;
  }

  .weekday:hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: blue;
    cursor: pointer;
    font-size: 40px;
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
  const onClickWeekday = (day) => {
    if (day === 'monday') {
      console.log('MONDAY');
    } else if (day === 'tuesday') {
      console.log('TUESDAY');
    } else if (day === 'wednesday') {
      console.log('WEDNESDAY');
    } else if (day === 'thursday') {
      console.log('THURSDAY');
    } else if (day === 'friday') {
      console.log('FRIDAY');
    }
  }
  const onButtonClick = () => {
    console.log('Hello');
  }

  return (
    <React.Fragment>
      <Nav>
        <div class='nav__left'>LEFT</div>
        <div class='nav__center'>CENTER</div>
        <div class='nav__right'>RIGHT</div>
      </Nav>
      <Header />
      <span>⚡️ T - BROWSER ⚡️</span>
      <TypeSelectBox onClick={onButtonClick}>
        <div class='left-btn'>
          LEFT
        </div>
        <div class='right-btn'>
          RIGHT
        </div>
      </TypeSelectBox>
      <Timetable>
        <div class='weekday monday' onClick={() => onClickWeekday('monday')}>
          <h3>MONDAY</h3>
          <div class='weekday monday'>
            1. 국어
            2. 수학
            3. 사회
            4. 영어
            5. 체육
            6. 도덕
          </div>
        </div>
        <div class='weekday tuesday' onClick={() => onClickWeekday('tuesday')}>
          <h3>TUESDAY</h3>
          <div class='weekday tuesday'>
            1. 국어
            2. 수학
            3. 사회
            4. 영어
            5. 체육
            6. 도덕
          </div>
        </div>
        <div class='weekday wednesday' onClick={() => onClickWeekday('wednesday')}>
          <h3>WEDNESDAY</h3>
          <div class='weekday wednesday'>
            <li>국어</li>
            <li>수학</li>
            <li>도덕</li>
            <li>영어</li>
            <li>사회</li>
          </div>
        </div>
        <div class='weekday thursday' onClick={() => onClickWeekday('thursday')}>
          <h3>THURSDAY</h3>
          <li>국어</li>
          <li>수학</li>
          <li>도덕</li>
          <li>영어</li>
          <li>사회</li>
          <li>실과</li>
        </div>
        <div class='weekday friday' onClick={() => onClickWeekday('friday')}>
          <h3>FRIDAY</h3>
          <div class='weekday friday'>
            <li>국어</li>
            <li>수학</li>
            <li>도덕</li>
            <li>영어</li>
            <li>사회</li>
            <li>실과</li>
          </div>
        </div>
      </Timetable>
      <Footer>
        <button class='footer-left-btn'>좋아요</button>
        <span>&copy; 교사용 브라우저 </span>
        {new Date().getFullYear()}
        <button class='footer-right-btn'>아쉬워요</button>
      </Footer>
    </React.Fragment >
  );
}

export default Three;