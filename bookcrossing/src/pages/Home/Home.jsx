import React from "react";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";

import "./Home.scss";

const Home = ({ children, ...props }) => {
    return (
        <div>
            <Navbar />
            <Header title="Главная"/>
            <div className="main">
                {/* <h1 className="main-header">Главная</h1> */}
                <div className="row1">
                    <div className="item-faq">
                        <span className="item-faq-title">FAQ</span>
                        <span className="item-faq-subtitle">
                            Нажмите для справки
                        </span>
                    </div>
                    <div className="item-info"></div>
                </div>
                <div className="row2">
                    <span className="row2-title">
                        Последние добавленные книги
                    </span>
                    <div className="row2-item"></div>
                    <div className="row2-item"></div>
                    <div className="row2-item"></div>
                    <div className="row2-item"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
