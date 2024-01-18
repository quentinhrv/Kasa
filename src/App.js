import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Accommodations from './pages/accommodations/Accommodations';
import Error from './pages/error/Error';
import Layout from './pages/layout/Layout';

import './styles/_main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>} />

          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/accommodations/:id" element={<Accommodations/>} />

          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;