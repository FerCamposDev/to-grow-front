import NextImage from 'next/image'

type Props = {
  src: string;
  alt: string;
  desc?: string;
  className?: string;
}

const Image = ({ src, alt, desc, className }: Props) => {
  return (
    <div className={className}>
      <div className='flex flex-col'>
        <NextImage
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

export default Image