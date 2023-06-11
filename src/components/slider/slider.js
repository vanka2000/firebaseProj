import { useState, useEffect } from 'react';
import './slider.css'
import React from 'react'


function Slider(){
    let [count, setCount] = useState(0);
    const holeWidth = 100;
    const goSlide = () => {
      setInterval(() => {
        
        -3 < count ? setCount((count -= 1)) : setCount((count = 0));
        console.log(count);
      }, 3000);
    };
    useEffect(() => {
      goSlide();
    }, []);





    return(
        
            <div className='sliderabout'>
                 <div className='wrapper_slide'  style={{ transform: `translate(${holeWidth * count}%)` }}>
                        <div className='first_card slider_card'></div>
                        <div className='second_card slider_card'></div>                  
                        <div className='third_card slider_card'></div>
                        <div className='fourth_card slider_card'></div> 
                </div>
            </div>
        
    )
}

export default Slider