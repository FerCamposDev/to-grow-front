import { Lang } from "@/types/lang";
import { PostMetadataWithSlug } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: PostMetadataWithSlug;
  lang: Lang;
}

const PostCard = ({ data, lang }: Props) => {
  const readMore = lang === 'es' ? 'Leer más' : 'Read more';

  return (
    <Link className="w-full max-w-80" href={`/${lang}/blog/${data.slug}`}>
      <div style={{ height: 460 }} className="w-full flex flex-col gap-4 rounded-md bg-gray-200 hover:bg-gray-300 hover:opacity-90">
        <Image className="!relative rounded-t-md max-h-52" src={data.image} alt="post image" layout="fill" objectFit="cover" />

        <div className="relative py-2 px-4 flex flex-col gap-4 h-full">
          <span className="text-sm italic">{data.date.toDateString()}</span>

          <h4 className="font-semibold">{data.title}</h4>

          <div className="overflow-hidden text-ellipsis">
            <p className="text-sm line-clamp-4">
              {data.description}
            </p>
          </div>

          <span className="absolute bottom-3 right-3 underline">{readMore}</span>
        </div>
      </div>
    </Link>
  )
}

export default PostCard