import React from 'react';
import './i18n';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import "./CustomScrollbar.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/en" element={<Home />} />
        </Route>
        <Route path="/ar">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
