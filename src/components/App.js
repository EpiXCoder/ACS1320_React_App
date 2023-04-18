import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Title from './Title/Title';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App" role="main">
      <div className="App-content">
        <Title />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
