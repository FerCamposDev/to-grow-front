import Button from "../../shared/Button";
import SectionTitle from "../../shared/SectionTitle"
import BlogCard from "./BlogCard";

const POST_IDS = ['1', '2', '3'];

const BlogSection = () => {
  return (
    <div id="blog" className="py-32">
      <div className="container px-4 mx-auto xl:px-48">
        <div className="flex flex-col gap-4">
          <SectionTitle
            title="Our Blog"
            description="Latest Blog & News"
          />

          <div className="flex justify-center gap-4">
            {POST_IDS.map((id) => (
              <BlogCard key={id} id={id} />
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