
import React from "react"
//import AppRouter from "./components/AppRouter"
//import NavBar from './components/navbar/NavBar'
//import FotterIndex from "./components/Fotter"

//---import MapsYandex from './components/YandexMap/MapsYandex'

import './App.css'
import MainSkeleton from "./components/SkeletonSlayd";

const  AppRouter = React.lazy( () => import(/* webpackChunkName: "AppRouter" */ "./components/AppRouter"))
const  NavBar = React.lazy( () => import(/* webpackChunkName: "NavBar" */ "./components/navbar/NavBar"))



function App() {
  return (
    <div className="App">
       <React.Suspense fallback={<MainSkeleton />}><NavBar /></React.Suspense>
       <React.Suspense ><AppRouter/></React.Suspense>

    
      
    </div>
  );
}

export default App
