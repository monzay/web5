import React from 'react'
import "./slider.css"
import { imgs } from '../objetoInformacion';


export const Slider = () => {

      return (
        <div className='slider'>
            <div className='slide-track'>
                {
                    imgs.map((gato,index)=> (
                        <div key={index} className='slide'>
                            <img src={gato.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
        
    );
      
}
