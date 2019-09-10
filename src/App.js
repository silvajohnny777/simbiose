import React from 'react';

import './styling/style.css';
import Navbar from './components/Navbar';
import Api from './components/Api';

function App() {
  return (
    <div>
        <Navbar/>
        <Api />
    </div>
  );
}

export default App;
