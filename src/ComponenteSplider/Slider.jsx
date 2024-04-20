import React from 'react'
import { useEffect,useState,useRef } from 'react';
import img1 from "../assets/img penteres/img1.jpg";
import img2 from "../assets/img penteres/img2.jpg";
import img3 from "../assets/img penteres/img3.jpg";
import img4 from "../assets/img penteres/img4.jpg";
import "./slider.css"

export const Slider = () => {
    const [estadoImgs,setEstadoImgs] = useState( [img1,img2,img3,img4])
    

    useEffect(() => {
        const interval =   setInterval(() => {
            
            setEstadoImgs(prev => {
                const firstImg =  prev.shift()
                prev.push(firstImg)
                return prev  
                
            })
          }, 5000);
          return ( )=> clearInterval(interval)
    }, [])

    useEffect(() => {
      console.log(estadoImgs)
    }, [estadoImgs])
    

      return (
        <section>
            <div  className='contenedor-splider'>
                {estadoImgs.map(gato => ( 
                    <div className='splider' >
                        <img className='img-splider' src={gato} />
                    </div>
                ))
                }
            </div>
        </section>
    );
      
}
