'use client'
import { useParamsLangWordings } from "@/hooks/useParamsLangWordings";
import { PostMetadata } from "@/types/post";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  data: PostMetadata;
}

const PostCard = ({ data }: Props) => {
  const { lang } = useParamsLangWordings();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${lang}/blog/${data.slug}`);
  }

  return (
    <div className="max-w-80 flex flex-col gap-4 rounded-md h-96 bg-gray-200 cursor-pointer hover:bg-gray-300 hover:opacity-90" onClick={handleClick}>
      <div className="relative">
        <Image className="rounded-t-md" src={data.image} alt="post image" width={350} height={230} />
        <div className="absolute bottom-3 left-3 bg-primary rounded-md px-2 py-0.5">
          <h4 className="text-white">{data.title}</h4>
        </div>
      </div>
      <div className="px-2">

        <span className="text-sm italic">{data.date.toLocaleDateString()}</span>
        <p className="">{data.description}</p> {/* TODO: review ellipsis */}
      </div>
    </div>
  )
}

export default PostCard