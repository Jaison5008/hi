import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './components/App';  
import App2 from './components2/App';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components3/navbar';
import Foot from './components3/foot'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    
      <Router><Navbar/><App/><App2/><Foot/></Router>
    
    
 
 
 
);

