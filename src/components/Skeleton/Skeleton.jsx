import React from "react"
import ContentLoader from "react-content-loader"



const Skeleton = React.memo(() => (
<ContentLoader 
    speed={3}
    width={200}
    height={30}
    viewBox="0 0 476 30"
    backgroundColor="#e1d1e1"
    foregroundColor="#c14949"
   
  >
    <rect x="32" y="1" rx="3" ry="3" width="200" height="22" /> 
    <circle cx="15" cy="12" r="12" />
  </ContentLoader>
))



export default Skeleton


