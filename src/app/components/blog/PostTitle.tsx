import React, { PropsWithChildren } from 'react'

type Props = {}

const PostTitle = ({children}: PropsWithChildren) => {
  return (
    <h2 className='font-medium text-3xl'>
      {children}
    </h2>
  )
}

export default PostTitle