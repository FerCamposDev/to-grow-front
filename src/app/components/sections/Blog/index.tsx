import { use } from "react";
import Button from "../../shared/Button";
import SectionTitle from "../../shared/SectionTitle"
import PostCard from "./PostCard";
import { getPosts } from "@/helpers/posts";
import { LangProps } from "@/types/lang";
import { dictionary } from "@/i18n";
import Link from "next/link";

const BlogSection = ({ lang }: LangProps) => {
  const posts = use(getPosts(lang));
  const wordings = dictionary[lang].blog_section;

  return (
    <div id="blog" className="py-32">
      <div className="container px-4 mx-auto xl:px-48">
        <div className="flex flex-col gap-4">
          <SectionTitle
            title={wordings.header}
            description={wordings.title}
          />

          <div className="flex justify-center gap-4 flex-wrap">
            {posts.map((post) => (
              <PostCard key={post.slug} data={post} lang={lang} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link href={`/${lang}/blog`}>
              <Button>
                {wordings.view_all}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection