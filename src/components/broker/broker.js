import './broker.css'
import React from 'react'

export default function Broker(){
    return(
        <div className='broker'>
            <div className='broker_wrapper'>
                <div className='broker_title'>
                    <h2>«Цифра брокер»</h2><p>Одна из ведущих инвестиционных компаний, которая оказывает поддержку на всех этапах – от аналитики и выбора лучших идей до помощи в получении доступа к IPO</p>
               </div>
               <div className='broker_blocks'>
                <div className='blocks'>
                            <div className='blocks_wrapper'>
                                 <div className='leftside_pict_broker firstbroker'></div>
                                 <div className='rightside_cont_broker'><h5>Открытие брокерского счёта</h5><p>Доступ к внебиржевым расчетным контрактам на стоимость акций быстрорастущих компаний и перспективных стартапов</p></div>
                            </div>
                 </div>
                 <div className='blocks'>
                            <div className='blocks_wrapper'>
                                 <div className='leftside_pict_broker secondbroker'></div>
                                 <div className='rightside_cont_broker'><h5>Персональный менеджер</h5><p>Личные консультации по инвестициям от аттестованных специалистов с опытом работы на фондовом рынке не менее пяти лет</p></div>
                            </div>
                 </div>
                 <div className='blocks'>
                            <div className='blocks_wrapper'>
                                 <div className='leftside_pict_broker thirdbroker'></div>
                                 <div className='rightside_cont_broker'><h5>Лучшие специалисты</h5><p>Команда специалистов с более чем десятилетним опытом работы на российских и международных биржах</p></div>
                            </div>
                 </div>
                 <div className='blocks'>
                            <div className='blocks_wrapper'>
                                 <div className='leftside_pict_broker fourthbroker'></div>
                                 <div className='rightside_cont_broker'><h5>Продукты</h5><p>Уникальные инвестиционные продукты с разным уровнем потенциальных рисков и доходности, разработанные командой аналитиков</p></div>
                            </div>
                 </div>
               </div>
            </div>
        </div>
    )
}