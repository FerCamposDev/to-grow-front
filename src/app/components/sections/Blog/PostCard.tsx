import { Lang } from "@/types/lang";
import { PostMetadata } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: PostMetadata;
  lang: Lang;
}

const PostCard = ({ data, lang }: Props) => {
  return (
    <Link className="w-full max-w-80" href={`/${lang}/blog/${data.slug}`}>
      <div className="w-full flex flex-col gap-4 rounded-md h-96 bg-gray-200 hover:bg-gray-300 hover:opacity-90">
        <div className="relative">
          <Image className="!relative rounded-t-md max-h-52" src={data.image} alt="post image" layout="fill" objectFit="cover" />
          <div className="absolute bottom-3 left-3 bg-primary rounded-md px-2 py-0.5">
            <h4 className="text-white">{data.title}</h4>
          </div>
        </div>
        <div className="px-2">

          <span className="text-sm italic">{data.date.toLocaleDateString()}</span>
          <p className="">{data.description}</p> {/* TODO: review ellipsis */}
        </div>
      </div>
    </Link>
  )
}

export default PostCard