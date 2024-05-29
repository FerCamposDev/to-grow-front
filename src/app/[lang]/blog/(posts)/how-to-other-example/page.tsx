import { LangParams } from '@/types/lang'
import { Metadata } from 'next';
import es from './es.json';
import en from './en.json';

const dictionary = { es, en };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return dictionary[params.lang || 'es'].metadata;
}

const PostPage = ({ params}: LangParams) => {
  const wordings = dictionary[params.lang || 'es'];

  return (
    <div>
      PostPage with lang: {params.lang}
      <p>
        {wordings.content} 
      </p>
    </div>
  )
}

export default PostPage