import { PropsWithChildren } from "react"

const PostDescription = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-xl">
      {children}
    </p>
  )
}

export default PostDescription