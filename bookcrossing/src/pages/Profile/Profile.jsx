import axios from "axios";
import React, {useState, useContext, useEffect} from "react";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";
import UserId from "../../context/userId";

import "./Profile.scss";
import UserPic from "../../assets/default-user.png";

const Profile = () => {
    const { userId, setUserId } = useContext(UserId);

    const [profileData, setProfileData] = useState();

    async function getUser() {
        let url = `http://localhost:8080/user/${userId}`;
        let response = await axios.get(url);
        console.log(response.data);
        setProfileData(response.data);
    }

    useEffect( () => {
      getUser();
    }, [] )

    return (
        <div>
            <Navbar />
            <Header title="Профиль" />
            { profileData ? (
                <div className="profile">
                <div className="profile-pic">
                    <img src={UserPic} alt="profile" className="profile-pic"/>
                </div>
                <div className="profile-descr">
                    <h2 className="profile-descr-name">{profileData.firstname}  {profileData.lastname}</h2>
                    <p className="profile-descr-city">{profileData.city}</p>
                    <p className="profile-descr-genre">{profileData.categories.map(item => {
                      return `${item.name}, `
                    })}</p>
                </div>
            </div>
            ) : (
                <h2 className="profile-loading">Загрузка....</h2>
            ) }
        </div>
    );
};

export default Profile;
