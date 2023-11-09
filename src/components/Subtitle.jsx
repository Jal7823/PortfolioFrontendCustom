import React from 'react'

function Subtitle({content}) {
  return (
    <div className='p-8'>
        <p className='text-3xl text-white text-start underline'>{content} </p>
    </div>
  )
}

export default Subtitle