import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Kimoo from './Pages/1';
import Hello from './Pages/5';
import Home from './Pages/Home';
import Three from './Pages/3';
import SHJ from './Pages/2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1" element={<Kimoo />} />
      <Route path="/2" element={<SHJ />} />
      <Route path="/3" element={<Three />} />
      <Route path="/4" element={<hi />} />
      <Route path="/5" element={<Hello />} />
    </Routes>
  );
}

export default App;
