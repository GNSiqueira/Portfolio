import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home/Home.js';
import Portfolio from './Pages/Portfolio/Portfolio.js';
import About from './Pages/About/About.js';
import ProjetoIntegrador from './Pages/Portfolio/ProjetoIntegrador/ProjetoIntegrador.js';

export default function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/portfolio" exact Component={Portfolio} />
                <Route path="/about" exact Component={About} />
                <Route path="/projeto" exact Component={ProjetoIntegrador} />
            </Routes>
        </BrowserRouter>
    );
}