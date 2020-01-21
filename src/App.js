import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter} from 'react-router-dom'
import Router from './Route';

function App() {
  return (
    <div className="App">
     <Header />
     <p>Park Zeus DashBoard</p>

     <BrowserRouter>
     <Router />


     </BrowserRouter>

     <Footer />
    </div>
  );
}

export default App;
