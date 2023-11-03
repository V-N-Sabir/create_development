import React from "react"
import ContentLoader from "react-content-loader"

const ImgSkeleton = () => (
  <ContentLoader 
    speed={3}
    width={100}
    height={100}
    viewBox="0 0 100 100"
    backgroundColor="#e1d1e1"
    foregroundColor="#c14949"
  >
    <circle cx="55" cy="30" r="30" />
  </ContentLoader>
)

export default ImgSkeleton

