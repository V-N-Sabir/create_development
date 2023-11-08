import React from "react"
import { useNavigate } from "react-router-dom"
import Contacts from "../contacts"
import { navBarRef } from "../navBarRef/navBarRef"

import './NavBar.style.css'


const NavBar = React.memo(() => {

    const navigate = useNavigate()
    //!!! Обернуть в useMemo

  /*  const NavBar =  React.useMemo(() => 
    [{name:"Главная",path: HOME}, {name:"Контакты", path: CONTACTS}, {name:"Портфолио", path:PROJECTS},]
, 
// eslint-disable-next-line
[HOME,CONTACTS,PROJECTS])
*/
//const navBar = React.useMemo(() => navBarRef, [])


//React.useMemo(() => [...] ,[добавить переменные которые есть в массиве ])
 
return (
    
 <header className="main_navBar">
    <div>
    <ul className="navBar navBar_block">

        {navBarRef.map(({name, path}) =>                
        <li key={name}  onClick={() => navigate(path)} > {name} </li>)}
    </ul>
    </div>

    <Contacts clName="navBar_contact"/>
  
 </header>
)})


export default NavBar



