import { Lang } from "@/types/lang";
import { PostLangMetadata } from "@/types/post";
import { Metadata } from "next";

type Params = {
  wordings: PostLangMetadata;
  slug: string;
  lang: Lang;
}

export const buildBlogMetadata = ({ wordings, slug, lang }: Params): Metadata => {
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
};
