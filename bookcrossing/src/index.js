import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import LoginStatus from "./context/loginStatus";
import UserId from "./context/userId";
import BookContext from "./context/bookId";
import GuestContext from "./context/guestContext";

import "./styles/index.scss";

function Main() {
    const [userId, setUserId] = useState(null);
    const [loginStatus, setLoginStatus] = useState(false);
    const [bookId, setBookId] = useState(null);
    const [guestID, setGuestId] = useState(null);
    

    return (
        <React.StrictMode>
            <LoginStatus.Provider value={{ loginStatus, setLoginStatus }}>
                <UserId.Provider value={{ userId, setUserId }}>
                    <BookContext.Provider value={{ bookId, setBookId }}>
                        <GuestContext.Provider value={{ guestID, setGuestId}}>
                            <App />
                        </GuestContext.Provider>
                    </BookContext.Provider>
                </UserId.Provider>
            </LoginStatus.Provider>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
