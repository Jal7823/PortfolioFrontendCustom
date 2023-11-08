import React from 'react'

function Subtitle({content}) {
  return (
    <div className='p-8'>
        <p className='text-3xl text-white text-start'>{content} </p>
        <hr className='w-1/2' />
    </div>
  )
}

export default Subtitle