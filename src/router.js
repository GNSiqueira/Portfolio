import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home.js';

export default function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Home} />
            </Routes>
        </BrowserRouter>
    );
}