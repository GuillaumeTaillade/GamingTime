// tape "rsc" pour automatiquement créer la base de l'app
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Les différents composants correspondent aux différentes pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="* " fonctionne si jamais l'URL ne correspond à rien de déclarer au dessus (redirige donc vers la page d'ACCUEIL) */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
