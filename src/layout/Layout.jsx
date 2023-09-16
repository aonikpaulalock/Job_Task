// import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Layout = () => {
  return (
    <main>
      <Header/>
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;