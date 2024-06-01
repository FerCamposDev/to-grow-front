import React, { PropsWithChildren } from 'react'

const Subtitle = ({children}: PropsWithChildren) => {
  return (
    <h3 className='font-medium text-2xl mt-6 mb-2'>
      {children}
    </h3>
  )
}

export default Subtitle