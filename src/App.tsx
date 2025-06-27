import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PratoDetalhes from './components/PratoDetalhes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes-prato/:id" element={<PratoDetalhes />} />
        <Route path="/novo-prato" element={<h1>Criar novo prato</h1>} />
        <Route path="/editar-prato" element={<h1>Editar um prato</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
