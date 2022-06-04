import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import Home from "./pages/Home/Home";
import Messages from "./pages/Messages/Messages";
import MyBooks from "./pages/MyBooks/MyBooks";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";

import "./styles/App.scss"

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mybooks" element={<MyBooks />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/favorites" element={<Add />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
