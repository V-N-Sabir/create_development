import React from "react"
import HeaderSkeleton from "./HeaderSkeleton"
import "./index.css"
import ImgSkeleton from "./ImgSkeleton"

const MainSkeleton = () => (
 <div className="main_skeleton">
    <ImgSkeleton />
    <HeaderSkeleton  width={14} />
    <HeaderSkeleton width={14}/>
    <HeaderSkeleton width={14}/>
    <HeaderSkeleton width={14}/>
    <HeaderSkeleton width={40}/>

 </div>
)

export default MainSkeleton

