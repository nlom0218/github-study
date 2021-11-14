import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import Home from './Pages/Home';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
