import React from 'react';

//libraries
import {BrowserRouter,Routes, Route} from "react-router-dom";

//Components
import Home from './pages/Home';
import About from './pages/About';
import HeadAndTail from './pages/HeadAndTail';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/head-tail' element={<HeadAndTail/>}/>
        </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
