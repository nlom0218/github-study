import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Kimoo from './Pages/1';
import Hello from './Pages/5';
import Home from './Pages/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1" element={<Kimoo />} />
      <Route path="/5" element={<Hello />} />
    </Routes>
  );
}

export default App;
