import { Lang } from "@/types/lang";
import { PostMetadata } from "@/types/post";
import { readdir } from "fs/promises";
import path from "path";

export async function getPosts(lang: Lang): Promise<PostMetadata[]> {
  // Get slugs
  const postsPath = "src/app/[lang]/blog/(posts)";
  const directories = await readdir(path.resolve(postsPath), { withFileTypes: true });

  const slugs = directories
    .filter((dir) => dir.isDirectory())
    .map(dir => dir.name);

  // Get metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { generateMetadata } = await import(`../app/[lang]/blog/(posts)/${slug}/page.tsx`);
      const metadata = await generateMetadata({ params: { lang }});
      return { 
        ...metadata,
        slug,
        date: new Date(metadata.date)
      };
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return posts;
}
