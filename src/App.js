import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Cardápio from './pages/Cardápio';
import Contato from './pages/Contato';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/cardapio" element={<Cardápio />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
