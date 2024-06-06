export type Author = {
  name: string;
  description: string;
  image: string;
  url: string;
}

export type CommonLangMetadata = {
  author: Author;
  categories: string[];
  date: Date;
  image: string;
}

export type PostLangMetadata = CommonLangMetadata & {
  title: string;
  description: string;
}

export type PostMetadataWithSlug = PostLangMetadata & {
  slug: string;
}

export type ItemContent = {
  title: string;
  desc: string | string[];
}

export type ImageContent = {
  url: string;
  desc?: string;
  alt: string;
}

type SectionContent = {
  title: string;
  desc: string | string[];
  items?: ItemContent[];
  image?: ImageContent;
  finalDesc?: string | string[];
}

export type PostContent = {
  intro: SectionContent;
  body: {
    section1: SectionContent;
    section2: SectionContent;
    section3?: SectionContent;
    section4?: SectionContent;
    section5?: SectionContent;
  }
  conclusion: SectionContent;
}

export type Post = {
  metadata: PostLangMetadata;
  content: PostContent;
}