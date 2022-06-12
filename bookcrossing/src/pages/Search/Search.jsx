import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";

import "./Search.scss";
import BookElement from "../../components/BLL/BookElements/BookElement";
import MySelect from "../../components/UI/MySelect/MySelect";

const Search = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState();
    const [selectedSort, setSelectedSort] = useState("");

    async function getBook() {
        let url = `http://localhost:8080/book/`;
        let response = await axios.get(url);
        console.log(response.data);
        setBookData(response.data);
    }

    const sortBooks = (sort) => {
        setSelectedSort(sort);
    };

    useEffect(() => {
        getBook();
    }, []);


    const sortedBooks = useMemo(() => {
        if (selectedSort) {
            if (selectedSort === "rating") {
                return ([...bookData].sort(
                    (a, b) => b[selectedSort] - a[selectedSort]
                ));
            } else {
                return ([...bookData].sort((a, b) =>
                    a[selectedSort].localeCompare(b[selectedSort])
                ));
            }
        } else return bookData;
    }, [bookData, selectedSort]);

    console.log(sortedBooks);

    const searchedBooks = useMemo(() => {
        if (sortedBooks) {
            return sortedBooks.filter(book =>
                book.name.toLowerCase().includes(search)
            );
        } else {
            return sortedBooks;
        }
        
    }, [search, sortedBooks]);

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
                <MySelect
                    defaultValue="Сортировка..."
                    value={selectedSort}
                    onChange={sortBooks}
                    options={[
                        { value: "name", name: "По названию" },
                        { value: "rating", name: "По рейтингу" },
                        { value: "yearPublishing", name: "По году издания" },
                    ]}
                />
                <div className="search-wrap">
                    {searchedBooks ? (
                        <>
                            {searchedBooks.map((item) => {
                                return (
                                    <BookElement data={item} key={item.id} />
                                );
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
