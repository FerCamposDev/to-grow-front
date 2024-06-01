
import { Metadata } from 'next';
import { Lang, LangParams } from '@/types/lang'
import { en } from './lang/en';
import { es } from './lang/es';
import { buildBlogMetadata } from '@/helpers/metadata';
import PostPageLayout from '@/app/components/blog/Layouts/PostPage';

import Title from '@/app/components/blog/PostTitle';
import Description from '@/app/components/blog/PostDescription';
import Subtitle from '@/app/components/blog/PostSubtitle';
import List from '@/app/components/blog/PostList';
import Image from '@/app/components/blog/PostImage';
import Quote from '@/app/components/blog/PostQuote';

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

  return buildBlogMetadata({ lang, wordings });
}

const PostPage = ({ params }: LangParams) => {
  const { lang = 'es' } = params;
  const metadata = dictionary[lang].metadata;
  const wordings = dictionary[lang].content;

  return (
    <PostPageLayout lang={lang} metadata={metadata}>
      <Title>{wordings.title}</Title>
      <Description>
        {wordings.description}
      </Description>

      <Subtitle>
        {wordings.section1.title}
      </Subtitle>
      <Description>
        {wordings.section1.desc}
      </Description>
      <br />
      <List numerated items={wordings.section1.items} />
      <br />
      <Description>
        {wordings.section1.finalDesc}
      </Description>

      <Subtitle>
        {wordings.section2.title}
      </Subtitle>
      <Description>
        {wordings.section2.desc}
      </Description>
      <Quote>
        {wordings.section2.quote}
      </Quote>
      <Image
        src={wordings.section2.image}
        alt="example"
        desc='sample description'
      />
      <br />
      <Description>
        {wordings.section2.finalDesc}
      </Description>

      <Subtitle>
        {wordings.conclusion.title}
      </Subtitle>
      <Description>
        {wordings.conclusion.desc1}
      </Description>
      <Description>
        {wordings.conclusion.desc2}
      </Description>
      <Description>
        {wordings.conclusion.desc3}
      </Description>
    </PostPageLayout>
  )
}

export default PostPage