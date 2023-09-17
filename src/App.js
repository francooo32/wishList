import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import BuyCarPage from './pages/BuyCar/BuyCarPage';
import NavBar from './components/navBar/navBar.jsx';



function App() {

  const [scrollHeight, setScrolHeight] = useState(0) 

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolHeight(position); 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
        {/* <MainToolbar /> */}
        {/* <div className='wassap'>
          <a href='https://wa.me/541162767256' target='_blank'>
            <BsWhatsapp/>
            </a>
        </div> */}
        <NavBar isScrolling={scrollHeight}/>
        <Routes>
          <Route path="/" element={<BuyCarPage />} />
          <Route path="/comprar" element={<BuyCarPage />} />
          {/* <Route path="/detalle" element={<CarDetail />} /> */}
        </Routes>
        
        
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
