import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import UserId from "../../../context/userId";

import "./Header.scss";
import ProfIcon from "../../../assets/UI/profile.png";
import SearchIcon from "../../../assets/UI/search.png";
import LoginContext from "../../../context/loginStatus";
import Popup from "../Popup/Popup";

const Header = ({ title }) => {
    const { loginStatus, setLoginStatus } = useContext(LoginContext);
    const { userId, setUserId } = useContext(UserId);

    const [popupAuth, setPopupAuth] = useState(false);
    const [popupReg, setPopupReg] = useState(false);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");

    const [errorInfo, setErrorInfo] = useState("");

    async function postAuth() {
        let url = "http://localhost:8080/auth";
        axios
            .post(url, {
                login: login,
                password: password,
            })
            .then(function (response) {
                console.log(response.data);
                setUserId(response.data);
                setPopupAuth(false);
                setLoginStatus(true);
            })
            .catch(function (error) {
                console.log(error);
                setErrorInfo(error.response.data);
            });
    }

    async function postReg() {
        let url = "http://localhost:8080/reg";
        axios
            .post(url, {
                login: login,
                password: password,
            })
            .then(function (response) {
                console.log(response.data);
                setUserId(response.data);
                setPopupReg(false);
            })
            .catch(function (error) {
                console.log(error);
                setErrorInfo(error.response.data);
            });
    }

    return (
        <div className="header">
            <h2 className="header-title">{title}</h2>
            <div className="header-profile">
                {loginStatus === false ? (
                    <>
                        <button
                            className="header-btn"
                            onClick={() => setPopupAuth(true)}
                        >
                            Авторизироваться
                        </button>
                        <button
                            className="header-btn"
                            onClick={() => setPopupReg(true)}
                        >
                            Зарегистрироваться
                        </button>
                    </>
                ) : (
                    <>
                        <p className="header-title">С возвращением!</p>
                    </>
                )}
            </div>
            <Popup active={popupAuth} setActive={setPopupAuth}>
                <div className="header-form">
                    <input
                        type="text"
                        placeholder="Логин"
                        value={login}
                        className="header-form-input"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        className="header-form-input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="header-form-error">{errorInfo}</p>
                    <button className="header-form-input" onClick={postAuth}>
                        Авторизироваться
                    </button>
                </div>
            </Popup>
            <Popup active={popupReg} setActive={setPopupReg}>
                <div className="header-form">
                    <input
                        type="text"
                        className="header-form-input"
                        placeholder="логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input
                        type="email"
                        className="header-form-input"
                        placeholder="почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        className="header-form-input"
                        placeholder="город"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                        type="text"
                        className="header-form-input"
                        placeholder="имя"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <input
                        type="text"
                        className="header-form-input"
                        placeholder="фамилия"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <input
                        type="password"
                        className="header-form-input"
                        placeholder="пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="header-form-error">{errorInfo}</p>
                    <button className="header-form-input" onClick={postReg}>
                        Зарегистрироваться
                    </button>
                </div>
            </Popup>
        </div>
    );
};

export default Header;
