import { HOME,  CONTACTS, PROJECTS, NOTFOUNDS } from "./utils/consts"
import React from "react"
//import Home from "./pages/Home"
//import Frames from "./pages/Frames"
//import Visors from "./pages/Visors"


const  Home = React.lazy( () => import(/* webpackChunkName: "home" */ "./pages/Home"))
const  Contacts = React.lazy( () => import(/* webpackChunkName: "contact" */ "./pages/Contacts"))
const  Projects = React.lazy( () => import(/* webpackChunkName: "project" */ "./pages/Projects"))

const  NotFounds = React.lazy( () => import(/* webpackChunkName: "notFound" */ "./pages/NotFounds/NotFounds"))

//const Cart = React.lazy( () => import("./pages/cart"))



export const PublicRoute =   [

    { 
        path: HOME,
        Component: Home
    },
    {
        path: CONTACTS,
        Component: Contacts
    },
    {
        path: PROJECTS,
        Component: Projects
    },
    {
        path: NOTFOUNDS,
        Component: NotFounds
    },

]