import { FC, PropsWithChildren } from 'react'

type Props = {}

const PostContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <article>
      <div className='container px-2 mx-auto py-10 md:px-12'>
        {children}
      </div>
    </article>
  )
}

export default PostContent;
