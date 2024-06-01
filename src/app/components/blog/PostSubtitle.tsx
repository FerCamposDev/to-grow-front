import React, { PropsWithChildren } from 'react'

const PostSubtitle = ({children}: PropsWithChildren) => {
  return (
    <h3 className='font-medium text-2xl mt-6 mb-2'>
      {children}
    </h3>
  )
}

export default PostSubtitle