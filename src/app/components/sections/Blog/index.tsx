import { use } from "react";
import Button from "../../shared/Button";
import SectionTitle from "../../shared/SectionTitle"
import PostCard from "./PostCard";
import { getPosts } from "@/helpers/posts";
import { LangProps } from "@/types/lang";

const BlogSection = ({ lang }: LangProps) => {
  const posts = use(getPosts(lang));

  return (
    <div id="blog" className="py-32">
      <div className="container px-4 mx-auto xl:px-48">
        <div className="flex flex-col gap-4">
          <SectionTitle
            title="Our Blog"
            description="Latest Blog & News"
          />

          <div className="flex justify-center gap-4">
            {posts.map((post) => (
              <PostCard key={post.slug} data={post} lang={lang} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button>
              View all Posts
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection