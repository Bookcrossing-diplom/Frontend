import React, { useState } from "react";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";

import "./Messages.scss";
import Photo from "../../assets/photos/photo.png";

const Messages = () => {
    const [messageData, setMessageData] = useState(["Привет!", "Хмм..."]);
    const [messageInput, setMessageInput] = useState("");

    function handleMessage() {
        setMessageData([...messageData, messageInput]);
    }

    return (
        <div>
            <Navbar />
            <Header title="Сообщения" />
            <div className="messages">
                <div className="messages-persons">
                    <div className="messages-persons-item pactive">
                        <img
                            src={Photo}
                            alt="user"
                            className="messages-persons-item-photo"
                        />
                    </div>
                    {/* <div className="messages-persons-item ">
                        <img
                            src={Photo}
                            alt="user"
                            className="messages-persons-item-photo"
                        />
                    </div>
                    <div className="messages-persons-item ">
                        <img
                            src={Photo}
                            alt="user"
                            className="messages-persons-item-photo"
                        />
                    </div>
                    <div className="messages-persons-item ">
                        <img
                            src={Photo}
                            alt="user"
                            className="messages-persons-item-photo"
                        />
                    </div> */}
                </div>
                <div className="messages-box">
                    <div className="messages-wrap">
                        <img
                            src={Photo}
                            alt="person"
                            className="messages-box-photo"
                        />
                        <h3 className="messages-box-title">
                            Елизавета Василькова
                        </h3>
                    </div>
                    <div className="messages-main">
                        <p className="messages-main-item l">Привет!</p>
                        <p className="messages-main-item l">
                            Редкое издание войны и мир, давай обмен!
                        </p>
                        {messageData.map((item, index) => {
                            return (
                                <p className="messages-main-item r" key={index}>
                                    {item}
                                </p>
                            );
                        })}
                    </div>
                    <div className="messages-field">
                        <input
                            type="text"
                            placeholder="Введите сообщение"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            className="messages-field-input"
                        />
                        <button
                            onClick={handleMessage}
                            className="messages-field-btn"
                        >
                            отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
