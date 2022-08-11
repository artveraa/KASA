import '../App.scss';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Home from "../pages/Home";
import SingleRent from "../pages/SingleRent";
import NotFound from "../pages/NotFound";
import About from "../pages/About";

function App() {
  return (
    <div className="App">

            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/detail/:id" element={<SingleRent/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>

        <Footer />
    </div>
  )
}

export default App;
