import React from "react"
import { useInView } from "react-intersection-observer"
import { NavLink } from "react-router-dom"
import tg from "../img/adresses/tg_2.webp"
import call_me from "../img/adresses/trubka.webp"
import "./index.css"
import ImageIndex from "./ImageIndex"

const Contacts = React.memo(({clName}) => {

    const {ref, inView } = useInView ({
        threshold: 0.8,
        triggerOnce: true
        })

//<img src={tg} alt="telegram contact" /> <img src={call_me} alt="our contacts" />}
  return (
    <div ref={ref} className={clName}>
    <NavLink className={"tg_contact"} to={"https://t.me/integration1C"} target="_blank">
        {inView && 
        <ImageIndex src={tg} alt={"telegram contact"}/>}
    </NavLink>

    <NavLink className="call_me_cont" to={"tel:+998903463546"}>
    {inView && 
     <ImageIndex src={call_me} alt={"our contacts"}/>}
    
    </NavLink>     
</div>
)

})

export default Contacts