import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import Index from './main/index';
import Switcher from './components/Switcher';
import IndexTwo from './main/index-two';
import IndexThree from './main/index-three';
import IndexDark from './main/index-dark';
import IndexRtl from './main/index-rtl';


function App() {
 
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/index-two" element={<IndexTwo/>} />
      <Route path="/index-three" element={<IndexThree/>} />
      <Route path="/index-dark" element={<IndexDark/>} />
      <Route path="/index-rtl" element={<IndexRtl/>} />
    </Routes>
    <Switcher/>
  </BrowserRouter>
  );
}

export default App;
