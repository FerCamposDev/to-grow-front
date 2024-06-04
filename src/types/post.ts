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

type ImageContent = {
  url: string;
  desc: string;
}

type SectionContent = {
  title: string;
  desc: string | string[];
  items?: ItemContent[];
  finalDesc?: string | string[];
  image?: ImageContent;
}

export type PostContent = {
  intro: SectionContent
  [key: string]: SectionContent;
  conclusion: SectionContent;
}

export type Post = {
  metadata: PostLangMetadata;
  content: PostContent;
}