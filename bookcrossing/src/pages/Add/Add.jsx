import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";
import UserId from "../../context/userId";
import BookItem from "../../components/BLL/BookItem/BookItem";



import "../MyBooks/MyBooks";

const Add = () => {

    const [bookData, setBookData] = useState();

    const { userId, setUserId } = useContext(UserId);

    async function getBooks() {
        let url = `http://localhost:8080/user/${userId}/desired`;
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
            <Header title="Желаемые книги"/>
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

export default Add;
