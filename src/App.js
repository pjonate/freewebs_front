import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/Login'; // Ajusta la ruta si tu archivo está en otra carpeta
import Register from './components/Register';

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