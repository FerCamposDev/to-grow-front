import { PropsWithChildren } from "react";
import { Lang } from "@/types/lang";
import { PostLangMetadata } from "@/types/post";
import BlogHeader from "../BlogHeader";
import PostHeaderContent from "./HeaderContent";
import PostContent from "./Content";

type Props = PropsWithChildren<{
  lang: Lang
  metadata: PostLangMetadata;
}>

const PostPageLayout = ({ lang, metadata, children }: Props) => {
  return (
    <main>
      <BlogHeader>
        <PostHeaderContent lang={lang} metadata={metadata} />
      </BlogHeader>

      <PostContent lang={lang}>
        {children}
      </PostContent>
    </main>
  )
}

export default PostPageLayout