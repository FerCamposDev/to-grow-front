import PostCard from "@/app/components/sections/Blog/PostCard";
import { getPosts } from "@/helpers/posts";
import { LangParams } from "@/types/lang";
import { use } from "react";

export default function Home({ params }: LangParams) {
  const { lang = 'es' } = params;
  const posts = use(getPosts());

  return (
    <main>
      SHOW ALL POSTS HERE

      {posts.map((post) => (
        <PostCard key={post.slug} data={post} />
      ))}
    </main>
  );
}
