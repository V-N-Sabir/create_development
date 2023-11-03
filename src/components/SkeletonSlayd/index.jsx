import React from "react"
import "./index.css"
import ImgSkeleton from "./ImgSkeleton"
import WrapperSkeleton from "../Skeleton"

const MainSkeleton = () => (
 
   <div className="wrappet_skeleton">
<WrapperSkeleton />


 
 <div className="main_skeleton">
    <ImgSkeleton />
    <ImgSkeleton />
 </div>

 </div>
)

export default MainSkeleton

