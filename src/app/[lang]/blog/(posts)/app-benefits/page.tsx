/* eslint-disable jsx-a11y/alt-text */

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
  const {
    intro,
    body,
    conclusion
  } = dictionary[lang].content;

  return (
    <PostPageLayout lang={lang} metadata={metadata}>
      <Title>{intro.title}</Title>
      <br />
      <Description lineJump>
        {intro.desc}
      </Description>
      <br />
      <br />

      <Subtitle>
        {body.section1.title}
      </Subtitle>
      <Description lineJump>
        {body.section1.desc}
      </Description>
      <br />

      <Subtitle>
        {body.section2.title}
      </Subtitle>
      <Description>
        {body.section2.desc}
      </Description>
      <br />
      <List items={body.section2.items} lineJump />
      <br />

      <Subtitle>
        {body.section3.title}
      </Subtitle>
      <Description>
        {body.section3.desc}
      </Description>
      <br />
      <List items={body.section3.items} lineJump />
      <br />
      <Image data={body.section3.image} />
      <br />

      <Subtitle>
        {body.section4.title}
      </Subtitle>
      <Description>
        {body.section4.desc}
      </Description>
      <br />
      <List items={body.section4.items} lineJump />
      <br />

      <Subtitle>
        {body.section5.title}
      </Subtitle>
      <Description>
        {body.section5.desc}
      </Description>
      <br />
      <List items={body.section5.items} lineJump />
      <br />

      <Subtitle>
        {body.section6.title}
      </Subtitle>
      <Description>
        {body.section6.desc}
      </Description>
      <br />
      <List items={body.section6.items} lineJump />
      <br />

      <Subtitle>
        {conclusion.title}
      </Subtitle>
      <Description className='text-justify' lineJump>
        {conclusion.desc}
      </Description>
    </PostPageLayout>
  )
}

export default PostPage