import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  numerated?: boolean;
  gap?: number;
}>

const PostList = ({ children, numerated, gap = 0 }: Props) => {

  if (numerated) {
    return (
      <ol className={`ml-8 list-decimal flex flex-col gap-${gap}`}>
        {children}
      </ol>
    )
  }

  return (
    <ul className={`ml-8 list-disc flex flex-col gap-${gap}`}>
      {children}
    </ul>
  )
}

export default PostList