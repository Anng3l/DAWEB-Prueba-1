import React from 'react';
import Navbar from "../../components/navbar/Navigationbar";
//Renderiza de manera dinámica el componente correspondiente de cada ruta en este componente.
//De esta forma, no se tiene que renderizar el navbar cada vez que se cambia de página.
import { Outlet } from 'react-router-dom';
import { Button } from 'bootstrap';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />      
    </>
  );
}

export default Layout;
