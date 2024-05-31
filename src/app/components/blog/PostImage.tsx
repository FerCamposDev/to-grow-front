import Image from 'next/image'
import React from 'react'

type Props = {
  src: string;
  alt: string;
  desc?: string;
  className?: string;
}

const PostImage = ({ src, alt, desc, className }: Props) => {
  return (
    <div className={className}>
      <div className='flex flex-col'>
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className='!relative'
        />
        {Boolean(desc) && (
          <span className='italic text-sm'>{desc}</span>
        )}
      </div>
    </div>
  )
}

export default PostImage