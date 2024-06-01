import Image from 'next/image';
import xLogo from '../../../../../public/img/x-logo.svg';
import whatsappLogo from '../../../../../public/img/whatsapp-logo.svg';
import { LangProps } from '@/types/lang';
import Link from 'next/link';
import path from 'path';

const ShareButtons = ({ lang }: LangProps) => {

  const shareText = lang === 'es' ? 'Comparte este post' : 'Share this post'
  const slug = path.basename(path.dirname(__filename));
  const url = encodeURI(`https://togrow.com.ar/${lang}/blog/${slug}`);

  return (
    <div className='flex flex-col gap-3 max-w-64'>
      <span className='font-medium text-xl'>{shareText}</span>

      <div className='flex justify-center items-center gap-4'>
        <Link href={`https://www.facebook.com/share.php?u=${url}`} target='_blank'>
          <i style={{ color: '#0866ff' }} className="fab fa-facebook-square text-5xl" aria-hidden="true"></i>
        </Link>
        <Link href={`https://twitter.com/share?&url=${url}`} target='_blank'>
          <Image src={xLogo} alt="x" className='!relative h-10 w-10' />
        </Link>
        <Link href={`https://www.linkedin.com/shareArticle?url=${url}`} target='_blank'>
          <i style={{ color: '#0A66C2' }} className="fab fa-linkedin text-5xl" aria-hidden="true"></i>
        </Link>
        <Link href={`https://api.whatsapp.com/send?text=${url}`} target='_blank'>
          <Image src={whatsappLogo} alt="x" className='!relative h-12 w-12' />
        </Link>
      </div>
    </div>
  )
}

export default ShareButtons