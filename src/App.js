import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import React from 'react';
import Login from './components/Login'; // Ajusta la ruta si tu archivo está en otra carpeta
import Register from './components/Register';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PantallaInicio />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bienvenida" element={<PantallaBienvenida />} />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    <Router>
      <Routes>   {/* Aquí se envuelven todas las rutas */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;