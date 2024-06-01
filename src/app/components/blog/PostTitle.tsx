import React, { PropsWithChildren } from 'react'

type Props = {}

const Title = ({children}: PropsWithChildren) => {
  return (
    <h2 className='font-medium text-3xl mb-2'>
      {children}
    </h2>
  )
}

export default Title