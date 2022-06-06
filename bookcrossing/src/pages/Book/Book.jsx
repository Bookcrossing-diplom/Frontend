import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";
import BookContext from "../../context/bookId";
import { useNavigate } from "react-router-dom";

import "./Book.scss";
import GuestContext from "../../context/guestContext";

const Book = () => {
    const navigate = useNavigate();

    const { bookId, setBookId } = useContext(BookContext);
    const { guestID, setGuestId } = useContext(GuestContext);

    const [bookData, setBookData] = useState();
    const [ratingValue, setRatingValue] = useState();
    const [commentData, setCommentData] = useState("");

    async function getBook() {
        let url = `http://localhost:8080/book/${bookId}`;
        let response = await axios.get(url);

        console.log(response.data);
        setBookData(response.data);
    }

    useEffect(() => {
        getBook();
    }, []);

    return (
        <>
            <Navbar />
            <Header title="Книга" />
            {bookData ? (
                <>
                    <div className="book">
                        <span className="book-name">
                            Название: {bookData.name}
                        </span>
                        <span className="book-edit">
                            Издательство: {bookData.edition}
                        </span>
                        <p></p>
                        <span className="book-edit">
                            Год: {bookData.yearPublishing}
                        </span>
                        {bookData.authors.map((item) => {
                            return (
                                <p className="book-author" key={item.id}>
                                    Автор: {item.firstname} {item.lastname}
                                </p>
                            );
                        })}
                        <span className="book-title">Категории: </span>
                        {bookData.categories.map((item) => {
                            return (
                                <span className="book-categ" key={item.id}>
                                    {item.name}
                                </span>
                            );
                        })}
                        <p></p>
                        <span className="book-title">Жанры: </span>
                        {bookData.genres.map((item) => {
                            return (
                                <span className="book-genre" key={item.id}>
                                    {item.name}
                                </span>
                            );
                        })}
                        <p></p>
                        <span className="book-title">Рейтинг:</span>
                        <span className="book-rating">{bookData.rating}</span>
                        <p></p>
                        <input
                            type="number"
                            placeholder="Ваша оценка 1/5"
                            className="book-inputR"
                            value={ratingValue}
                            onChange={(e) => setRatingValue(e.target.value)}
                        />
                        {bookData.usersBooks.map((item) => {
                            return (
                                <p className="book-user" key={item.id} onClick={() => {
                                    setGuestId(item.usersModel.id);
                                    navigate("/guest");
                                }}>
                                    {item.type === "Желаемые"
                                        ? "Желает: "
                                        : "Имеет: "}{" "}
                                    {item.usersModel.firstname}{" "}
                                    {item.usersModel.lastname}
                                </p>
                            );
                        })}
                    </div>
                    <input
                        type="text"
                        placeholder="Ваш комментарий..."
                        className="comment-input"
                        value={commentData}
                        onChange={(e) => setCommentData(e.target.value)}
                    />
                    {bookData.bookUserCommentModels.map((item) => {
                        return (
                            <div className="comment" key={item.id}>
                                <span className="comment-name">
                                    {item.usersModel.firstname}{" "}
                                    {item.usersModel.lastname}
                                </span>
                                <p className="comment-text">{item.comment}</p>
                            </div>
                        );
                    })}
                </>
            ) : (
                <>Загрузка...</>
            )}
        </>
    );
};

export default Book;
