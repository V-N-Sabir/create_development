import React from "react"
import ContentLoader from "react-content-loader"

const ImgSkeleton = (props) => (
  <ContentLoader 
    speed={3}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#e1d1e1"
    foregroundColor="#c14949"
  >
     <rect x="131" y="26" rx="3" ry="3" width="161" height="32" /> 
    <circle cx="55" cy="52" r="52" />
  </ContentLoader>
)

export default ImgSkeleton

