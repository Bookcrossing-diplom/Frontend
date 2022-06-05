import React, { useState, useContext } from "react";
import BookContext from "../../../context/bookId";

const BookElement = ({ data }) => {
    const { bookId, setBookId } = useContext(BookContext);

    return (
        <div className="search-item">
            <span className="search-item-name">{data.name}</span>
            {data.authors.map(item => {
                return <span className="search-item-authors" key={item.id}>{item.firstname} {item.lastname}</span>
            })}
            <span className="search-item-edit">{data.edition}</span>
            {data.genres.map(item => {
                return <span className="search-item-genres" key={item.id}>{item.name}</span>
            })}
            <div className="search-item-bot">
                <span className="search-item-rating">{data.rating}</span>
                <span className="search-item-year">{data.yearPublishing} год</span>
            </div>
        </div>
    );
};

export default BookElement;
