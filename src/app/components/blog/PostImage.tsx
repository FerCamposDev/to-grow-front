import { ImageContent } from '@/types/post';
import NextImage from 'next/image'

type Props = {
  data: ImageContent;
  className?: string;
}

const Image = ({ data, className }: Props) => {
  const { url, alt, desc } = data;
  return (
    <div className={className}>
      <div className='flex flex-col'>
        <NextImage
          src={url}
          alt={alt || ''}
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

export default Image