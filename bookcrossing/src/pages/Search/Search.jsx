import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";

import "./Search.scss";
import BookElement from "../../components/BLL/BookElements/BookElement";

const Search = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState();

    async function getBook() {
        let url = `http://localhost:8080/book/`;
        let response = await axios.get(url);
        console.log(response.data);
        setBookData(response.data);
    }

    useEffect(() => {
        getBook();
    }, []);

    return (
        <>
            <Header title="Поиск" />
            <Navbar />
            <div className="search">
                <input
                    type="text"
                    placeholder="Поиск..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="search-wrap">
                    {bookData ? (
                        <>
                            {bookData.map((item) => {
                                return <BookElement data={item} key={item.id} />;
                            })}
                        </>
                    ) : (
                        <>Загрузка...</>
                    )}
                </div>
            </div>
        </>
    );
};

export default Search;
