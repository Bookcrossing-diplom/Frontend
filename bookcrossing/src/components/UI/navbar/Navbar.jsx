import React from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.scss";

import Logo from "../../../assets/navbar/logo.png";
import Book from "../../../assets/navbar/book.png";
import Message from "../../../assets/navbar/message.png";
import Person from "../../../assets/navbar/person.png";
import Quit from "../../../assets/navbar/quit.png";

const Navbar = () => {
   const navigate = useNavigate();

    return (
        <div className="navbar">
            <img src={Logo} alt="main" className="navbar-item"  onClick={() => navigate("/")}/>
            <img src={Book} alt="book" className="navbar-item" onClick={() => navigate("/mybooks")}/>
            <img src={Person} alt="person" className="navbar-item" onClick={() => navigate("/profile")}/>
            <img src={Message} alt="messages" className="navbar-item" />
            <img src={Quit} alt="quit" className="navbar-item" />
        </div>
    );
};

export default Navbar;
