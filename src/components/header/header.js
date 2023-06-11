import React, { useState } from "react";
import './header.css'
import { Link, animateScroll as scroll } from "react-scroll";
import Modal from "../modal/modal";

function Header(){

// const [color,setColor] = useState('')


const [modalActive, setModalActive] = useState(false)
// const changer = () =>{
//     if(color === 'changecolor'){
//         setColor('') 
//     } else{
//         setColor('changecolor')
//     }
    
// }


    const [burger, setBurger] = useState('')
    function BurgerShow(){
        if(burger === 'active_burger'){
            setBurger('')
        } else{
            setBurger('active_burger')
        }
    }

    return(
        <>
        <header className="header">
         
            <div className={`link_container ${burger}`}>
                <Link smooth={true} onClick={BurgerShow}  className="link" to="mainsec">Что такое IPO</Link>
                <Link smooth={true} onClick={BurgerShow} offset={-85} className="link" to="history">Истории успеха</Link>
                <Link smooth={true} onClick={BurgerShow} offset={-70} className="link" to="broker">О нас</Link>
                <Link smooth={true} onClick={BurgerShow}  className="link" to="form_container">Узнать про IPO подробнее</Link>
               
            </div>
            <div className="account_svg"  onClick={() => setModalActive(true)}></div>

            <div onClick={BurgerShow} className="burger_menu ">
                <span className="burger_menu_span"></span>
                <span className="burger_menu_span"></span>
                <span className="burger_menu_span"></span>
            </div>
        </header>
        <Modal active={modalActive} setActive={setModalActive}/>
        </>
        
    )
    
}

export default Header