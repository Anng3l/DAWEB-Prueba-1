import React from 'react';
import Navbar from "../../components/navbar/Navigationbar";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
