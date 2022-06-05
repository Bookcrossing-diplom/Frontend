import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import BookItem from "../../components/BLL/BookItem/BookItem";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";
import Popup from "../../components/UI/Popup/Popup";
import BookContext from "../../context/bookId";
import UserId from "../../context/userId";

import "./MyBooks.scss";

const MyBooks = () => {
    const [bookData, setBookData] = useState();
    const [addPopup, setAddPopup] = useState(false)

    const { userId, setUserId } = useContext(UserId);

    async function getBooks() {
        let url = `http://localhost:8080/user/${userId}/mybook`;
        let response = await axios.get(url);
        console.log(response.data);
        setBookData(response.data);
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div>
            <Navbar />
            <Header title="Мои книги" />
            <Popup />
            <div className="books">
                <div className="books-item book-btn">
                    <span className="book-btn-plus">+</span>
                </div>
                {bookData ? (
                    bookData.map((item) => {
                        return <BookItem data={item} key={item.id}/>;
                    })
                ) : (
                    <>Загрузка</>
                )}
            </div>
        </div>
    );
};

export default MyBooks;
