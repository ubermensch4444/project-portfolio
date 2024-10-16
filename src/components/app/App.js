import React, { useState } from 'react';
import './App.css';
import Header from '../layout/header/Header';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Footer from '../layout/footer/Footer';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuSelect = (menuItem) => {
    setSelectedMenu(menuItem);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      default:
        return <div>Please select a menu.</div>;
    }
  };

  return (
    <div className="App">
      <div className="background-text">{selectedMenu}</div>
      <Header onSelectMenuItem={handleMenuSelect} currentPage={selectedMenu} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
