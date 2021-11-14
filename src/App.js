import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import Kimoo from './Pages/1';
import Home from './Pages/Home';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1" element={<Kimoo />} />
    </Routes>
  );
}

export default App;
