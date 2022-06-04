import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import LoginStatus from "./context/loginStatus";
import UserId from "./context/userId";

import "./styles/index.scss";

function Main() {
    const [userId, setUserId] = useState(null);
    const [loginStatus, setLoginStatus] = useState(false);

    return (
        <React.StrictMode>
            <LoginStatus.Provider value={{ loginStatus, setLoginStatus }}>
                <UserId.Provider value={{ userId, setUserId }}>
                    <App />
                </UserId.Provider>
            </LoginStatus.Provider>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
