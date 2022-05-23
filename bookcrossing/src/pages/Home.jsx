import React from "react";
import Navbar from "../components/UI/navbar/Navbar";

import "./Home.scss";

const Home = ({ children, ...props }) => {
    return (
        <div>
            <div className="nav">
                <Navbar />
            </div>
            <div className="main">
                <h1 className="main-header">Главная</h1>
                <div className="row1">
                    <div className="item-faq">
                        <span className="item-faq-title">FAQ</span>
                        <span className="item-faq-subtitle">Нажмите для справки</span>
                    </div>
                    <div className="item-info"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;