import React from 'react'
import './NotFounds.css'
import { NavLink } from 'react-router-dom'
import { HOME } from '../../utils/consts'


const NotFounds = () => (
 <div className={"main_notfound page page-enter-active"}>
    <NavLink className={"main_ref_notfounds"} to={HOME}>На главную</NavLink>
   <h1 className="main_title_mistake">Страница не найдена</h1>
   <div className="wrapper_mistake">
      <h2 className="main_mistake">Ошибка № </h2>
      <p className="number_mistake">404</p>
   </div>
  
 </div>
)

export default NotFounds