import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Kimoo from './Pages/1';
import Home from './Pages/Home';
import Three from './Pages/3';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1" element={<Kimoo />} />
      <Route path="/3" element={<Three />} />
    </Routes>
  );
}

export default App;
