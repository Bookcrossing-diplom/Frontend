import React from "react";

import "./Header.scss";
import ProfIcon from "../../../assets/UI/profile.png";
import SearchIcon from "../../../assets/UI/search.png";

const Header = ({title}) => {
    return (
        <div className="header">
            <h2 className="header-title">{title}</h2>
            <div className="header-search">
                <input type="text" placeholder="Поиск..." />
                <img src={SearchIcon} alt="" />
            </div>
            <div className="header-profile">
                <img src={ProfIcon} alt="profile" width="30px" height="auto"/>
            </div>
        </div>
    );
};

export default Header;
