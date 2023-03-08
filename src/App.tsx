import React from 'react';
import logo from './logo.svg';
import './App.css';
import Emulator from './components/Emulator/Emulator';

const App = () => {
  return (
    <div>
      <Emulator />
      {/* <img src={logo} className='react-logo' alt='logo' /> */}
    </div>
  );
};

export default App;
