import React from 'react'
import { useInView } from "react-intersection-observer"


import maps from "../img/adresses/karta.webp"
import pismo from "../img/adresses/pismo.webp"
import trubka from "../img/adresses/trubka.webp"


import ImageIndex from '../contacts/ImageIndex'
import './addresses.css'

const Adresses = () => {



  const {ref, inView } = useInView ({
    threshold: 0.8,
    triggerOnce: true
    })


  return (
      
    <div ref={ref} className='wrapper_fotter_adres'>
      <div className='main_adress'>
        {inView && <ImageIndex src={trubka} alt={"trubka"}/>}
          <p className='main_adress_text'>+998 90 3463546</p>
      </div>
      <div className='main_adress'>
          {inView && <ImageIndex src={maps} alt={"maps"}/>}
          <p className='main_adress_text'>г. Ташкент, Мирабадский район</p>
      </div>
      <div className='main_adress'>
        {inView && <ImageIndex src={pismo} alt={"pismo"}/>}
        <p className='main_adress_text'>sabirka682@gmail.com</p>
      </div>

    
    
   
  </div>
)

}

export default Adresses