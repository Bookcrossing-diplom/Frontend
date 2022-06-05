import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";

import "./Search.scss";

const Search = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState();

    async function getBook() {
        
    }

    useEffect( () => {
        getBook();
    }, [] )

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
            </div>
        </>
    );
};

export default Search;
