import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.scss";

import Logo from "../../../assets/navbar/logo.png";
import Book from "../../../assets/navbar/book.png";
import Message from "../../../assets/navbar/message.png";
import Person from "../../../assets/navbar/person.png";
import Quit from "../../../assets/navbar/quit.png";
import Add from "../../../assets/navbar/add.png";
import Search from "../../../assets/navbar/search.png";
import LoginContext from "../../../context/loginStatus";

const Navbar = () => {
   const navigate = useNavigate();

   const { loginStatus, setLoginStatus } = useContext(LoginContext);

    return (
        <div className="navbar">
            { loginStatus === true ? (
                <>
                    <img src={Logo} alt="main" className="navbar-item"  onClick={() => navigate("/")}/>
                    <img src={Book} alt="book" className="navbar-item" onClick={() => navigate("/mybooks")}/>
                    <img src={Add} alt="add book" className="navbar-item" onClick={() => navigate("/desired")}/>
                    <img src={Search} alt="search" className="navbar-item" onClick={() => navigate("/search")}/>
                    <img src={Person} alt="person" className="navbar-item" onClick={() => navigate("/profile")}/>
                    <img src={Message} alt="messages" className="navbar-item" onClick={() => navigate("/messages")}/>
                    <img src={Quit} alt="quit" className="navbar-item" />
                </>
            ) : (
                <>
                    <img src={Logo} alt="main" className="navbar-item"  onClick={() => navigate("/")}/>
                </>
            ) }
            
        </div>
    );
};

export default Navbar;
