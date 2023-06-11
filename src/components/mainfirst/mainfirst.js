import React from "react";
import './mainfirst.css'
import Slider from "../slider/slider";

function Mainfirst(){
    return(
        <div className="main">
            <div className="leftside_cont">
                <h1>Инвестирование в IPO</h1>
                <p>За 2019-2022 годы более 1000 компаний провели первичное размещение своих ценных бумаг на американских биржах NASDAQ и NYSE.
                    Наши аналитики отбирают из этих компаний самые перспективные
                </p>
                <button className="leftside_cont_btn">Стать Инвестором</button>
            </div>
            <div className="rightside_cont">
                <Slider/>
            </div>
        </div>
    )
}

export default Mainfirst