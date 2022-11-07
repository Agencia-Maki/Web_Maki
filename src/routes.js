import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contactanos from './pages/contactanos/index'
import Inicio from './pages/inicio/index'
import Nosotros from './pages/nosotros/index'
import Proyectos from './pages/proyectos/index'
import Servicios from './pages/servicios/index'


const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Inicio />} />
          <Route index="contactanos" element={<Contactanos />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="servicios" element={<Servicios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routes