import React, { PropsWithChildren } from 'react'

type Props = {}

const PostTitle = ({children}: PropsWithChildren) => {
  return (
    <h2 className='font-semibold text-2xl'>
      {children}
    </h2>
  )
}

export default PostTitle