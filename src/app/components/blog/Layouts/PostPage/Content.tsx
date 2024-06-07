import { FC, PropsWithChildren } from 'react'
import { Lang } from '@/types/lang';
import ShareButtons from './ShareButtons';
import Button from '../../../shared/Button';
import Link from 'next/link';
import { dictionary } from '@/i18n';

type Props = PropsWithChildren<{
  lang: Lang;
}>

const PostContent: FC<Props> = ({ children, lang }) => {
  const wordings = dictionary[lang];

  return (
    <div className='container px-2 mx-auto py-10 md:px-12'>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <article className='w-full lg:w-10/12 mb-24'>
          {children}
        </article>

        <aside className='flex gap-8 flex-col md:flex-row lg:flex-col items-center justify-between text-center w-full lg:w-auto mb-24'>
          <ShareButtons lang={lang} />

          <div className='flex flex-col items-center gap-3'>
            <h6 className='font-medium text-xl'>{wordings.contact_section.title}</h6>
            <Link href={`/${lang}/#contact`}>
              <Button>
                {wordings.contact_section.header}
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PostContent;
