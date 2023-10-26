import React from 'react'

const ImageHeader = ({headerTitle}) => {
  return (
      <div className="events_header h-48 flex font-roboto text-yellow-400 text-5xl font-bold items-center">
        <p className="px-10 translate-x-10">{headerTitle}</p>
      </div>
  
  )
}

export default ImageHeader