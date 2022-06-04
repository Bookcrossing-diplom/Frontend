import React, {useContext} from "react";

import "./Header.scss";
import ProfIcon from "../../../assets/UI/profile.png";
import SearchIcon from "../../../assets/UI/search.png";
import LoginContext from "../../../context/loginStatus";

const Header = ({title}) => {

    const {loginStatus, setLoginStatus} = useContext(LoginContext);

    return (
        <div className="header">
            <h2 className="header-title">{title}</h2>
            <div className="header-profile">
                {loginStatus === false ? (
                    <>
                        <button>Авторизироваться</button>
                        <button>Зарегистрироваться</button>
                    </>
                ) : (
                    <>
                        <p className="header-title">С возвращением!</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
