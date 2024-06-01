import { FC, PropsWithChildren } from 'react'
import { Lang } from '@/types/lang';
import ShareButtons from './PostShareButtons';
import Button from '../../shared/Button';
import Link from 'next/link';
import { dictionary } from '@/i18n';

type Props = PropsWithChildren<{
  lang: Lang;
}>

const PostContent: FC<Props> = ({ children, lang }) => {
  const wordings = dictionary[lang];

  return (
    <article>
      <div className='container px-2 mx-auto py-10 md:px-12'>
        {children}

        <br />
        <div className='flex justify-center items-center flex-wrap gap-10 md:justify-between'>
          <ShareButtons lang={lang} />

          <div className='flex flex-col items-center gap-3'>
            <h6 className='font-medium text-xl'>{wordings.contact_section.title}</h6>
            <Link href={`/${lang}/#contact`}>
              <Button>
                {wordings.contact_section.header}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostContent;
