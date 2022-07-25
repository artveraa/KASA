import '../App.scss';
import Header from './Header';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Home from "../pages/Home";
import SingleRent from "../pages/SingleRent";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<SingleRent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App;
