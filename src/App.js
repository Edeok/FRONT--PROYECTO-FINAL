import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Home from "./components/home/Home"
import Detail from './components/detail/ProductsDetail';


const App = () => {
  return (
    <Routes>
   
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
  
  </Routes>
    
  );
};

export default App;
