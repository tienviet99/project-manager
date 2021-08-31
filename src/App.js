import './App.css'
import React from 'react';
import Home from './layout/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return ( 
    <Router>
      <div >
        <Home />
      </div>
    </Router>
)}

export default App;
