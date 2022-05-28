import React from "react";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";

import "./MyBooks.scss";

const MyBooks = () => {
    return (
        <div>
            <Navbar />
            <Header title="Мои книги"/>
            <div className="books">
                <div className="books-item book-btn">
                    <span className="book-btn-plus">+</span>
                </div>
                <div className="books-item"></div>
                <div className="books-item"></div>
                <div className="books-item"></div>
                <div className="books-item"></div>
                <div className="books-item"></div>
                <div className="books-item"></div>
                <div className="books-item"></div>
                <div className="books-item"></div>
            </div>
        </div>
    );
};

export default MyBooks;
