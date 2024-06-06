import { LangProps } from '@/types/lang';
import { PostLangMetadata } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'

type Props = LangProps & {
  metadata: PostLangMetadata;
};

const PostHeaderContent: FC<Props> = (props) => {
  const { lang, metadata } = props;
  const { title, description, author, date } = metadata;

  return (
    <div className='relative h-full'>
      <div className='absolute top-6'>
        <Link href={`/${lang}/blog`}>
          <div className='flex items-center gap-2 px-2 py-1 rounded-full border border-gray-900 hover:bg-gray-300 active:bg-gray-400'>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <span>View all Posts</span>
          </div>
        </Link>
      </div>

      <div className='h-full flex flex-col justify-center gap-2'>
        <h1 className="font-bold text-2xl md:text-4xl">
          {title}
        </h1>

        <p className='text-lg md:text-xl'>
          {description}
        </p>
      </div>

      <div className="absolute bottom-4 left-0 flex items-center gap-4">
        <div className='flex items-center gap-2'>
          <Image
            alt="Author"
            src={author.image}
            height={40}
            width={40}
            className="w-10 h-10 rounded-full"
          />

          <h6>
            {author.name}
          </h6>
        </div>

        <div className='h-10 border-r-2 rounded-full border-gray-900'></div>

        <span className='text-sm italic'>
          {date.toLocaleDateString()}
        </span>
      </div>
    </div>
  )
}

export default PostHeaderContent