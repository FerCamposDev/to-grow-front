
import { Lang, LangParams } from '@/types/lang'
import { Metadata } from 'next';
import es from './es.json';
import en from './en.json';
import Header from '@/app/components/blog/Header';
import PostHeaderContent from '@/app/components/blog/PostHeaderContent';
import PostContent from '@/app/components/blog/PostContent';
import PostTitle from '@/app/components/blog/PostTitle';

const dictionary = { es, en };

type Params = {
  params: {
    lang: Lang;
    slug: string;
    onlyWordings?: boolean;
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang = 'es', slug } = params;
  const wordings = dictionary[lang].metadata;

  if (params.onlyWordings) return wordings;

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

const PostPage = ({ params }: LangParams) => {
  const { lang = 'es' } = params;
  const metadata = dictionary[lang].metadata;
  const wordings = dictionary[lang].content;

  return (
    <main>
      <Header>
        <PostHeaderContent
          lang={lang}
          title={metadata.title}
          description={wordings.description}
          author={metadata.author}
          authorImg={metadata.authorImg}
          date={new Date(metadata.date)}
        />
      </Header>

      <PostContent>
        <PostTitle>{wordings.title}</PostTitle>
      </PostContent>
    </main>
  )
}

export default PostPage