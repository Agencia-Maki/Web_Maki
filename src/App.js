import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Servicios from './pages/servicios/index'
import Proyectos from './pages/proyectos/index'
import Nosotros from './pages/nosotros/index'
import Contacto from './pages/contacto/index'
import Inicio from './pages/inicio/index'

import Layout from './layouts/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/nosotros" element={<Contacto />} />
          <Route path="/contacto" element={<Nosotros />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App