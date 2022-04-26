import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cats from "./components/Cats";
import NavBar from "./components/Navbar";
import CatView from "./components/CatView";
import Home from "./components/Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NavBar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cats" element={<Cats />} />
        </Routes>
        
    </BrowserRouter>
);