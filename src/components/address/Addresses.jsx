import React from 'react'
import { useInView } from "react-intersection-observer"


import maps from "../img/adresses/karta.webp"
import pismo from "../img/adresses/pismo.webp"
import trubka from "../img/adresses/trubka.webp"


import ImageIndex from '../contacts/ImageIndex'
import './addresses.css'
import ImgSkeleton from '../SkeletonSlayd/ImgSkeleton'
import Skeleton from '../Skeleton/Skeleton'

const Adresses = () => {



  const {ref, inView } = useInView ({
    threshold: 0.8,
    triggerOnce: true
    })


  return (
      
    <div ref={ref} className='wrapper_fotter_adres'
    itemscope itemtype="http://schema.org/Organization">
      {/*<div className='wrapper_footer_skeleton'><ImgSkeleton/> <Skeleton/></div>*/}
      {inView ?  
      <div className='main_adress'>
        <ImageIndex src={trubka} alt={"trubka"}/> 
        <p className='main_adress_text'><span itemprop="telephone">+998 90 3463546</span></p>
      </div>: 
      <div className='wrapper_footer_skeleton'><ImgSkeleton/><Skeleton/></div>}
      {inView ? 
      <div className='main_adress'>
          <ImageIndex src={maps} alt={"maps"}/>
          <p  className='main_adress_text' >г. <span itemprop="addressLocality">Ташкент</span>, <span itemprop="streetAddress">Мирабадский район, дом 6/1</span></p>
      </div>: 
      <div className='wrapper_footer_skeleton'><ImgSkeleton/><Skeleton/></div>}

      {inView ? <div className='main_adress'>
        <ImageIndex src={pismo} alt={"pismo"}/>
        <p className='main_adress_text' itemprop="email">sabirka682@gmail.com</p>
      </div>: 
      <div className='wrapper_footer_skeleton'><ImgSkeleton/><Skeleton/></div>}

    
    
   
  </div>
)

}

export default Adresses