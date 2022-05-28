import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyBooks from "./pages/MyBooks/MyBooks";

import "./styles/App.scss"

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mybooks" element={<MyBooks />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
