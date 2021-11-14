import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Home = () => {
  return (
    < Container className="App" >
      <Link to="/1">기무 선생님</Link>
      <Link to="/2">반딧불 선생님</Link>
      <Link to="/3">티코 선생님</Link>
      <Link to="/4">조은 선생님</Link>
      <Link to="/5">크리링 선생님</Link>
    </ Container>
  );
}

export default Home;