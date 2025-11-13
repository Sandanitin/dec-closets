import React from 'react';
import Header from '../components/Header';
import Closets from '../components/Closets';
import Footer from '../components/Footer';

const ClosetsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Closets />
      </main>
      <Footer />
    </div>
  );
};

export default ClosetsPage;
