import React from 'react'


const ImageIndex = React.memo(({src, alt}) => {
  return (
    <img src={src} alt={alt} />
)

})

export default ImageIndex