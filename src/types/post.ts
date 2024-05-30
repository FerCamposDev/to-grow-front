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
