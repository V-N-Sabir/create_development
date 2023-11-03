import React from "react"
import ContentLoader from "react-content-loader"

const HeaderSkeleton = (props) => (
  <ContentLoader 
    speed={3}
    width={200}
    height={30}
    
    backgroundColor="#e1d1e1"
    foregroundColor="#c14949"
   

  >
<rect x="26" y="3" rx="3" ry="3" width="125" height={`${props.width}`} /> 
  </ContentLoader>
)

export default HeaderSkeleton

