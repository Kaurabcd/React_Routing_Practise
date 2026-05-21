import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./home"  ;
import About from "./About";
import Detail from "./Detail";
function App(){
    return (
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/detail">Detail</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
        </Routes>
        </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);