import { Lang, LangParams } from '@/types/lang'
import { Metadata } from 'next';
import es from './es.json';
import en from './en.json';
import path from 'path';

const dictionary = { es, en };

type Params = {
  params: {
    lang: Lang;
    onlyWordings?: boolean;
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang = 'es' } = params;
  const wordings = dictionary[lang].metadata;

  if (params.onlyWordings) return wordings;

  const slug = path.basename(path.dirname(__filename));

  return {
    title: wordings.title,
    description: wordings.description,
    authors: {
      name: wordings.author,
    },
    keywords: ['blog', 'software development', ...wordings.categories],
    openGraph: {
      type: 'article',
      title: wordings.title,
      images: `https://togrow.com.ar${wordings.image}`,
      description: wordings.description,
      url: `https://togrow.com.ar/${lang}/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: wordings.title,
      description: wordings.description,
      images: `https://togrow.com.ar${wordings.image}`,
      site: `https://togrow.com.ar/${lang}/blog/${slug}`,
    }
  }
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