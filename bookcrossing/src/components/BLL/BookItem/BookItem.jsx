import React, { useState, useContext } from "react";
import BookContext from "../../../context/bookId";

const BookItem = ({data}) => {

    const {bookId, setBookId} = useContext(BookContext);

    return <div className="books-item">
        <span className="books-item-name">{data.name}</span>
        {data.categories.map(item => {
            return <span className="books-item-edit" key={item.id}>{item.name}</span>;
        })}
        <span className="books-item-author">{ data.authors.map(item => {
            return `${item.firstname} ${item.lastname} `
        }) }</span>
    </div>;
};

export default BookItem;
