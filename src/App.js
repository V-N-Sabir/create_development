
import React from "react"
//import AppRouter from "./components/AppRouter"
//import NavBar from './components/navbar/NavBar'
//import FotterIndex from "./components/Fotter"

//---import MapsYandex from './components/YandexMap/MapsYandex'

import './App.css'

const  AppRouter = React.lazy( () => import(/* webpackChunkName: "AppRouter" */ "./components/AppRouter"))
const  NavBar = React.lazy( () => import(/* webpackChunkName: "NavBar" */ "./components/navbar/NavBar"))
//const  FotterIndex = React.lazy( () => import(/* webpackChunkName: "FotterIndex" */ "./components/Fotter"))


function App() {
  return (
    <div className="App">
       <React.Suspense fallback={<div>Loading...</div>}><NavBar /></React.Suspense>
       <React.Suspense><AppRouter/></React.Suspense>
        {/*<React.Suspense fallback={<div>Loading FUTTER...</div>}><FotterIndex /></React.Suspense>*/}
    
      
    </div>
  );
}

export default App
