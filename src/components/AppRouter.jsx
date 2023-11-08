import React from "react"
import {Routes, Route, } from 'react-router-dom'
import { PublicRoute } from "../routes"
import { CSSTransition } from "react-transition-group"
import LoadingContext from "./loadingContext/loadingContext"
//import FotterIndex from "./Fotter"
//import { useInView } from "react-intersection-observer"
const  FotterIndex = React.lazy( () => import(/* webpackChunkName: "FotterIndex" */ "./Fotter"))

const AppRouter = () => {
   
   
   /* const {ref, inView } = useInView ({
        threshold: 0.9,
        triggerOnce: true
        })
        console.log("inView - ", inView );
React.useEffect( () => {
if (inView) {
    console.log("main load",inView);
}
}, [inView])
*/
return (

    
    //
    <>
    <main className="main_pages">
        <Routes>               
            {PublicRoute.map(({path, Component}) =>                
                <Route key={path} path={path} element={<React.Suspense fallback={<LoadingContext/>}><Component/></React.Suspense>}>
                    {({match}) => 
                    <CSSTransition
                        timeout={1000}
                        classNames={"page"}
                        unmountOnExit
                        in={!match != null}
                    >
                    <Component />
                </CSSTransition>

                }
                </Route>
                )} 
        </Routes>
    </main>

<React.Suspense fallback={<div>Loading FUTTER...</div>}><FotterIndex /></React.Suspense>
</>
)}


export default AppRouter