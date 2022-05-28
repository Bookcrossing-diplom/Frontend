import React from "react";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";

import "./Messages.scss";
import Photo from "../../assets/photos/photo.png";

const Messages = () => {
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
                    </div>
                    <div className="messages-persons-item ">
                        <img
                            src={Photo}
                            alt="user"
                            className="messages-persons-item-photo"
                        />
                    </div>
                </div>
                <div className="messages-box">
                    <div className="messages-wrap">
                        <img src={Photo} alt="person" className="messages-box-photo" />
                        <h3 className="messages-box-title">Name name</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
