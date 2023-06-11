import './mainhistory.css';
import HistoryCard from './historyCard';
import arrHistoryCard from '../../service/serviseHistory';
import { useState } from 'react';


export default function MainHistory(){

    // const [ObjCard, setArrCard] = useState(arrHistoryCard[0])
    const [arrCard, setCard] = useState(arrHistoryCard)

    // function switchCard (e) {
    //     setArrCard(arrHistoryCard.filter((item) => item.cardname === e.target.innerText)[0])
    // }

    function switchCard(e){
        arrHistoryCard.forEach(item => item.cardname === e.target.innerText ? item.visible = 'visible' : item.visible = '')
        setCard(arrHistoryCard.map(item => item))
    }

    return(
        <section className='history'>
            <div className='history_title'>
            <h1>Истории успеха IPO</h1>
            <p>За 2019-2022 годы публичными стали более 1000 компаний. По статистике, средняя доходность более 268 IPO, в которых участвовали наши клиенты с 2012 года, по итогам трехмесячного lock-up составила 51,87%. Среди наиболее заметных размещений 2019-2020 годов: Zoom, Beyond Meat, Schrodinger, Inari Medical, Berkeley Lights</p>
            </div>
            <div className='history_cont'>
                <div className='leftside_history'>
                    <button onClick={switchCard} className='btn_history Zoom'>Zoom</button>
                    <button onClick={switchCard} className='btn_history Beyond'>Beyond Meat</button>
                    <button onClick={switchCard} className='btn_history Schrodinger'>Schrodinger Inc.</button>
                    <button onClick={switchCard} className='btn_history Inari'>Inari Medical</button>
                    <button onClick={switchCard} className='btn_history Berkeley'>Berkeley Lights</button>
                </div>
                {arrCard.map((item, index) => <HistoryCard data={item} key ={index}/>)}
            </div>
         
        </section>
    )
} 