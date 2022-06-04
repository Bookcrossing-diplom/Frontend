import React, { useState } from "react";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";

import "./Search.scss";

const Search = () => {
    const [search, setSearch] = useState("");

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
