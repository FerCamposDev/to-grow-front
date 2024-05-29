import { use } from "react";
import Button from "../../shared/Button";
import SectionTitle from "../../shared/SectionTitle"
import PostCard from "./PostCard";
import { getPosts } from "@/helpers/posts";

const BlogSection = () => {
  const posts = use(getPosts());

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
              <PostCard key={post.slug} data={post} />
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