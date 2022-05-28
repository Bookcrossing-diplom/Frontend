import React from 'react'
import Header from '../../components/UI/Header/Header'
import Navbar from '../../components/UI/navbar/Navbar'

import "./Profile.scss";

const Profile = () => {
  return (
    <div>
        <Navbar />
        <Header title="Профиль"/>
        <div className="profile">
            <div className="profile-pic">
                <img src="" alt="profile" />
            </div>
            <div className="profile-descr">
                <h2 className="profile-descr-name">Name name</h2>
                <p className='profile-descr-city'>New-York</p>
                <p className='profile-descr-genre'>Kek, Kek, Kek,</p>
            </div>
        </div>
    </div>
  )
}

export default Profile