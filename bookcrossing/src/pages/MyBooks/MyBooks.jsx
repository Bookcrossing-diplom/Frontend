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
    const [addPopup, setAddPopup] = useState(false);
    const [categoryData, setCategoryData] = useState();

    const { userId, setUserId } = useContext(UserId);

    const [bookName, setBookName] = useState("");
    const [bookEdition, setBookEdition] = useState("");
    const [bookYear, setBookYear] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookGenre, setBookGenre] = useState("");
    const [category, setCategory] = useState("");
    const [genre, setGenre] = useState("");

    async function getBooks() {
        let url = `http://localhost:8080/user/${userId}/mybook`;
        let response = await axios.get(url);
        console.log(response.data);
        setBookData(response.data);
    }

    async function getCategory() {
        let url = `http://localhost:8080/book/category`;
        let response = await axios.get(url);
        console.log(response.data);
        setCategoryData(response.data);
    }

    async function postBook() {
        let url = `http://localhost:8080/user/${userId}/addMybook`;
        let arr = bookAuthor.split(" ");
        let firstname = arr[0];
        let lastname = arr[1];
        axios
            .post(url, {
                name: bookName,
                edition: bookEdition,
                yearPublishing: bookYear,
                authors: [
                    {
                        firstname: firstname,
                        lastname: lastname,
                    },
                ],
                categories: [
                    {
                        name: category,
                    },
                ],
                genres: [
                    {
                        name: genre,
                    },
                ],
            })
            .then(function (response) {
                console.log(response.data);
                setBookData(response.data);
                setAddPopup(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getBooks();
        getCategory();
    }, []);

    return (
        <div>
            <Navbar />
            <Header title="Мои книги" />
            <Popup active={addPopup} setActive={setAddPopup}>
                <div className="Bform">
                    <input
                        type="text"
                        placeholder="Название книги"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Издательство"
                        value={bookEdition}
                        onChange={(e) => setBookEdition(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Год издания"
                        value={bookYear}
                        onChange={(e) => setBookYear(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Авторы"
                        value={bookAuthor}
                        onChange={(e) => setBookAuthor(e.target.value)}
                    />
                    {categoryData ? (
                        <>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categoryData.map((item) => {
                                    return (
                                        <option value={item.name}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <select
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                {categoryData.map((item) => {
                                    if (item.name == category) {
                                        return item.genres.map((kek) => {
                                            return (
                                                <option value={kek.name}>
                                                    {kek.name}
                                                </option>
                                            );
                                        });
                                    }
                                })}
                            </select>
                        </>
                    ) : (
                        <>Загрузка...</>
                    )}

                    <button onClick={postBook} >Добавить</button>
                </div>
            </Popup>
            <div className="books">
                <div
                    className="books-item book-btn"
                    onClick={() => setAddPopup(true)}
                >
                    <span className="book-btn-plus">+</span>
                </div>
                {bookData ? (
                    bookData.map((item) => {
                        return <BookItem data={item} key={item.id} />;
                    })
                ) : (
                    <>Загрузка</>
                )}
            </div>
        </div>
    );
};

export default MyBooks;
