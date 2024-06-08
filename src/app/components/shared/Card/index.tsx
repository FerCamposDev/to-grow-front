import { PropsWithChildren } from 'react'


const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className='p-4 rounded-md border-2 border-gray-100 shadow-xl'>
      {children}
    </div>
  )
}

export default Card