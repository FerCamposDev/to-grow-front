import { FC, PropsWithChildren } from 'react'

const BlogHeader: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="relative" style={{ backgroundImage: "url('/img/blog/background2.jpg')" }}>
      <div className="container px-2 mx-auto md:px-12">
        <div className="h-96 lg:h-80 flex flex-col justify-center gap-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default BlogHeader