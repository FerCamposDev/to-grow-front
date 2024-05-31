import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {}

const PostQuote = ({ children }: Props) => {
  return (
    <blockquote className='my-2 italic p-2 border-l-4 border-gray-300 bg-gray-100 rounded-md'>
      {children}
    </blockquote>
  )
}

export default PostQuote