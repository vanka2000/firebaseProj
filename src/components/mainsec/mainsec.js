import React from "react";
import './mainsec.css'


function MainSec(){
    return(
        <div className="mainsec">
            <div className="mainsec_cont">
                <h1 className="mainsec_h1">Что такое IPO</h1>
                <p>IPO – первичное размещение акций компании на бирже. В результате IPO cтатус бизнеса меняется — вместо частного он становится публичным, и акционером может стать любой желающий</p>
            </div>
            <div className="mainsec_blocks">
                <div className="mainsec_blocks_row"><div className="svg_block1"></div><h3>Поиск инвестиционной идеи</h3>                    <p>Наши специалисты анализируют все предложения на рынке и отбирают самые эффективные</p></div>
                <div className="mainsec_blocks_row"><div className="svg_block2"></div><h3>Выход на биржу</h3>
                <p>При выходе на биржу цена акций может вырасти на десятки процентов из-за большого спроса</p></div>
                <div className="mainsec_blocks_row"><div className="svg_block3"></div><h3>Доход</h3>
                <p>По истечении периода lock-up инвесторы могут зафиксировать свою прибыль</p></div>
            </div>
            <div className="blue_block">
                <div className="blue_block_leftside"><h1>69%</h1></div>
                <div className="blue_block_rightside"><p>69% сделок в рамках IPO, состоявшихся с 2012-го по июнь 2022 года, уже принесли прибыль инвесторам <br/>Из всех IPO мы отбираем самые перспективные</p>
                 <button className="blue_block_rightside_btn">Стать инвестором</button>
                 </div>
            </div>
        </div>
    )
}

export default MainSec