import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="container my-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
