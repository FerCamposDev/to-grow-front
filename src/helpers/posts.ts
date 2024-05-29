import { PostMetadata } from "@/types/post";
import { readdir } from "fs/promises";
import path from "path";

export async function getPosts(): Promise<PostMetadata[]> {
  // Get slugs
  const postsPath = "src/app/[lang]/blog/(posts)";
  const directories = await readdir(path.resolve(postsPath), { withFileTypes: true });

  const slugs = directories
    .filter((dir) => dir.isDirectory())
    .map(dir => dir.name);

  // console.log('slugs :>> ', slugs);

  // Get metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`../app/[lang]/blog/(posts)/${slug}/page.mdx`);
      return { 
        ...metadata,
        slug,
        date: new Date(metadata.date)
      };
    })
  );

  // console.log('posts :>> ', posts);

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return posts;
}
