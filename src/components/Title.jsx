import React from 'react'

function Title({content}) {
  return (
    <div className='p-8'>
        <p className='text-4xl text-white text-start'>{content} </p>
        <hr className='w-1/2' />
    </div>
  )
}

export default Title