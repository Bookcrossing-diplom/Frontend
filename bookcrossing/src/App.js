import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Messages from "./pages/Messages/Messages";
import MyBooks from "./pages/MyBooks/MyBooks";
import Profile from "./pages/Profile/Profile";

import "./styles/App.scss"

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mybooks" element={<MyBooks />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
