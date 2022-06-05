import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/navbar/Navbar";

import "./Home.scss";

const Home = ({ children, ...props }) => {

    const [newsData, setNewsData] = useState();

    async function getNews() {
        let url = "http://localhost:8080/news"
        let response = await axios.get(url);
        console.log(response.data);
        setNewsData(response.data);
    }


    useEffect( () => {
        getNews();
    }, [] )

    return (
        <div>
            <Navbar />
            <Header title="Главная"/>
            <div className="main">
                <div className="row1">
                    <div className="item-faq">
                        <span className="item-faq-title">FAQ</span>
                        <span className="item-faq-subtitle">
                            Нажмите для справки
                        </span>
                    </div>
                    <div className="item-info"></div>
                </div>
                <div className="row2">
                    <span className="row2-title">
                        Последние добавленные книги
                    </span>
                    <div className="row2-item"></div>
                    <div className="row2-item"></div>
                    <div className="row2-item"></div>
                    <div className="row2-item"></div>
                </div>
                <div className="main-news">
                    { newsData ? (
                        newsData.map(item => {
                            return (
                                <div className="main-news-item" key={item.id}>
                                    <span className="main-news-item-title">{item.heading}</span>
                                    <span className="main-news-item-descr">{item.body}</span>
                                    <span className="main-news-item-date">{item.dateOfPosting}</span>
                                </div>
                            );
                        })
                    ) : (
                        <h2>Загрузка...</h2>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default Home;
