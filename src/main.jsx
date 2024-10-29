import React from 'react';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Estilos globales
import './index.css'

//Páginas a rutear
  //Se importa sin llaves cuando se exporta por default. Con llave cuando se exporta con nombre.
import { About } from './pages/about/about.jsx';
import { Team } from './pages/equipo/team.jsx';
import Home from './pages/home/home.jsx';
import Pokedex  from './pages/pokedex/pokedex';

  //Página para mostrar en caso de que el usuario ingrese a una ruta inexistente
import { NotFound } from './pages/notFound/notFound.jsx';

//Ruteo
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Layout
import Layout from './pages/layout/layout.jsx';

  //Rutas y componente a renderizar según la ruta. Considerar que hay que importar todas las páginas que se quieren rutear.
const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound/>
      },
      {
        path: "/team",
        element: <Team />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/pokedex",
        element: <Pokedex/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>
)
