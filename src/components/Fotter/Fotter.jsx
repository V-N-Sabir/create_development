import React from 'react'

import Contacts from '../contacts';
import { navBarRef } from '../navBarRef/navBarRef';
import { useNavigate } from 'react-router-dom';
import AdressesIndex from '../address';
import  './Fotter.css'

const Fotter = () => {
    const navigate = useNavigate()

    return(
        <div className='wr_footer_block'>
            <div>
                <ul className="navBar">
                    {navBarRef.map(({name, path}) =>                
                    <li key={name}  onClick={() => navigate(path)} > {name} </li>)}
                </ul>
            </div>
            <AdressesIndex />
         
            <div className="ftr_contact">
                <Contacts  clName="navBar_contact"/>
            </div>
        
          
        </div>
         
)}

export default Fotter;