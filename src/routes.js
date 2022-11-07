import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from './pages/inicio/index'
import Contactanos from './pages/contactanos/index'
import Nosotros from './pages/nosotros/index'
import Proyectos from './pages/proyectos/index'
import Servicios from './pages/servicios/index'


function routes (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="inicio" element={<Inicio/>}/>
          <Route path="contactanos" element={<Contactanos />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="servicios" element={<Servicios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<routes />);

export default routes