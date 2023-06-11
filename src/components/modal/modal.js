import React, { useEffect, useState } from "react";
import './modal.css';
import Validation from "../validation/validation";




const Modal = ({active, setActive}) => {


    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        hfhh:'',
        
        
    })
    const [errors, setErrors] = useState({})
    function handleInput(event){
        const newObj = {...values,[event.target.name] : event.target.value}
        setValues(newObj)
    }

    function handleValidation(event){
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
            <div className={active ? "closeModal active" : "modal"} onClick={() => setActive(false)}></div>

                <h1>Login</h1>
                <form onSubmit={handleValidation}>
                <div className="sing_up_block">
                    <label for = 'email'>Email</label>
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                    <input onChange={handleInput} name="email" className="sing_up_block_input" type="text" placeholder="Enter your email"/>
                    
                    <label for = 'name'>Name</label>
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                    <input onChange={handleInput} name="name" className="sing_up_block_input" type="text" placeholder="Enter your name"/>
                    
                    <label for = 'password'>Password</label>
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                    <input onChange={handleInput} name="password" className="sing_up_block_input" type="password" placeholder="Enter your password"/>
                    
                    <a className="modal_a" href="#">Forgot Password?</a>
                    <div className="btn_sing_up_cont"><button type="submit">Login</button></div>
                    
                    
                </div>
                </form>
            </div>
        </div>
    ) 
}

export default Modal