import { Metadata } from "next";
import path from "path";
import { Lang } from "@/types/lang";
import { PostLangMetadata } from "@/types/post";

type Params = {
  wordings: PostLangMetadata;
  lang: Lang;
}

export const buildBlogMetadata = ({ wordings, lang }: Params): Metadata => {
  const slug = path.basename(path.dirname(__filename));

  return {
    title: wordings.title,
    description: wordings.description,
    authors: {
      name: wordings.author.name,
      url: wordings.author.url,
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
