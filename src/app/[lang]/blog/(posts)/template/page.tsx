
import { Lang, LangParams } from '@/types/lang'
import { Metadata } from 'next';
import Header from '@/app/components/blog/Header';
import PostHeaderContent from '@/app/components/blog/PostHeaderContent';
import PostContent from '@/app/components/blog/PostContent';
import PostTitle from '@/app/components/blog/PostTitle';
import path from 'path';
import { en } from './lang/en';
import { es } from './lang/es';
import { buildBlogMetadata } from '@/helpers/metadata';

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

  return buildBlogMetadata({ lang, slug, wordings });
}

const PostPage = ({ params }: LangParams) => {
  const { lang = 'es' } = params;
  const metadata = dictionary[lang].metadata;
  const wordings = dictionary[lang].content;

  return (
    <main>
      <Header>
        <PostHeaderContent lang={lang} metadata={metadata} />
      </Header>

      <PostContent lang={lang}>
        <PostTitle>{wordings.title}</PostTitle>
      </PostContent>
    </main>
  )
}

export default PostPage