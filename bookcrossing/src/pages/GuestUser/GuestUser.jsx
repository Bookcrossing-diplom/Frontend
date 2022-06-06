import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import "./GuestUser.scss";
import "../Profile/Profile.scss";
import "../Search/Search.scss";
import Pic from "../../assets/photos/photo.png";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";
import GuestContext from "../../context/guestContext";
import BookElement from "../../components/BLL/BookElements/BookElement";

const GuestUser = () => {
    const navigate = useNavigate();

    const { guestID, setGuestId } = useContext(GuestContext);

    const [guestData, setGuestData] = useState();

    async function getGuest() {
        let url = `http://localhost:8080/user/${guestID}`;
        let response = await axios.get(url);
        console.log(response.data);
        setGuestData(response.data);
    }

    useEffect(() => {
        getGuest();
    }, []);

    return (
        <>
            <Header />
            <Navbar />
            {guestData ? (
                <>
                    <div className="profile">
                        <div className="profile-pic">
                            <img
                                src={Pic}
                                alt="profile"
                                className="profile-pic"
                            />
                        </div>
                        <div className="profile-descr">
                            <h2 className="profile-descr-name">
                                {guestData.firstname} {guestData.lastname}
                            </h2>
                            <p className="profile-descr-city">
                                {guestData.city}
                            </p>
                            <p className="profile-descr-genre">
                                {guestData.categories.map((item) => {
                                    return `${item.name}, `;
                                })}
                            </p>
                        </div>
                    </div>
                    <button className="guestBtn" onClick={() => navigate("/messages")}>Написать!</button>
                    <div className="guestWrap">
                        <div className="search-wrap">
                            {guestData.usersBooks.map((item) => {
                                return (
                                    <div className="bookG-item">
                                        <p className="bookG-item-type">
                                            {item.type}
                                        </p>
                                        <p className="bookG-item-name">
                                            {item.bookModel.name}
                                        </p>
                                        <p className="bookG-item-author">
                                            {item.bookModel.authors.map(
                                                (el) => {
                                                    return `${el.firstname} ${el.lastname}`;
                                                }
                                            )}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <h2 className="profile-loading">Загрузка....</h2>
            )}
        </>
    );
};

export default GuestUser;
