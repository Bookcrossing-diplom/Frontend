import React from "react";

import "./Navbar.scss";

import Logo from "../../../assets/navbar/logo.png";
import Book from "../../../assets/navbar/book.png";
import Message from "../../../assets/navbar/message.png";
import Person from "../../../assets/navbar/person.png";
import Quit from "../../../assets/navbar/quit.png";


const Navbar = ({  }) => {
    return (
        <div className="navbar">
            <a href="" >
               <img src={Logo} alt="main" className="navbar-item" /> 
            </a>
            <a href="" >
               <img src={Book} alt="book" className="navbar-item" />    
            </a>
            <a href="" >
               <img src={Person} alt="person" className="navbar-item" />     
            </a>
            <a href="" >
               <img src={Message} alt="messages" className="navbar-item" />     
            </a>
            <a href="" >
               <img src={Quit} alt="quit" className="navbar-item" />     
            </a>
        </div>
    );
};

export default Navbar;
