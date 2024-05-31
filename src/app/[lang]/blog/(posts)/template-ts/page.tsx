
import { Metadata } from 'next';
import path from 'path';
import { Lang, LangParams } from '@/types/lang'
import { en } from './lang/en';
import { es } from './lang/es';
import { buildBlogMetadata } from '@/helpers/metadata';
import Header from '@/app/components/blog/Header';
import PostHeaderContent from '@/app/components/blog/PostHeaderContent';
import PostContent from '@/app/components/blog/PostContent';
import PostTitle from '@/app/components/blog/PostTitle';
import PostDescription from '@/app/components/blog/PostDescription';
import PostSubtitle from '@/app/components/blog/PostSubtitle';
import PostList from '@/app/components/blog/PostList';
import PostImage from '@/app/components/blog/PostImage';
import PostQuote from '@/app/components/blog/PostQuote';
import PostShareButtons from '@/app/components/blog/PostShareButtons';

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

      <PostContent>
        <PostTitle>{wordings.title}</PostTitle>
        <PostDescription>
          {wordings.description}
        </PostDescription>

        <PostSubtitle>
          {wordings.section1.title}
        </PostSubtitle>
        <PostDescription>
          {wordings.section1.desc}
        </PostDescription>
        <br />
        <PostList numerated>
          {wordings.section1.items.map((item) => (
            <li key={item.title}>
              <p><b>{item.title}</b>: {item.desc}</p>
            </li>
          ))}
        </PostList>
        <br />
        <PostDescription>
          {wordings.section1.finalDesc}
        </PostDescription>

        <PostSubtitle>
          {wordings.section2.title}
        </PostSubtitle>
        <PostDescription>
          {wordings.section2.desc}
        </PostDescription>
        <PostQuote>
          {wordings.section2.quote}
        </PostQuote>
        <PostImage
          src={wordings.section2.image}
          alt="example"
          desc='sample description'
        />
        <br />
        <PostDescription>
          {wordings.section2.finalDesc}
        </PostDescription>

        <PostSubtitle>
          {wordings.conclusion.title}
        </PostSubtitle>
        <PostDescription>
          {wordings.conclusion.desc1}
        </PostDescription>
        <PostDescription>
          {wordings.conclusion.desc2}
        </PostDescription>
        <PostDescription>
          {wordings.conclusion.desc3}
        </PostDescription>

        <br />
        <PostShareButtons lang={lang} />
      </PostContent>
    </main>
  )
}

export default PostPage