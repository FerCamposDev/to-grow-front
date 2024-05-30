export type CommonLangMetadata = {
  author: string;
  authorImg: string;
  categories: string[];
  date: string; // TODO: now it could be Date because is TS
  image: string;
}

export type PostLangMetadata = CommonLangMetadata & {
  title: string;
  description: string;
}

export type PostMetadataWithSlug = PostLangMetadata & {
  date: Date;
  slug: string;
}
