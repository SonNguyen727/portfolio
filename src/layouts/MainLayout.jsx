import React from 'react';
import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="page-fade-in">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

