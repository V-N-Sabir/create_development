
import React from "react"
//import AppRouter from "./components/AppRouter"
//import NavBar from './components/navbar/NavBar'
import MainSkeleton from "./components/SkeletonSlayd"
import './App.css'
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
