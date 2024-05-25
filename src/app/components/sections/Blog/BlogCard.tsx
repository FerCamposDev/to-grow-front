'use client'
import { useParamsLangWordings } from "@/hooks/useParamsLangWordings";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
}

const BlogCard = ({ id }: Props) => {
  const { lang } = useParamsLangWordings();
  const router = useRouter();

  // get blog by id;
  const blog = {
    image: `/img/home/${id}.jpg`,
    category: 'development',
    title: 'Sample Title',
    description: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero',
    date: new Date(), // create from iso string without time
  }

  const handleClick = () => {
    router.push(`/${lang}/blog/${id}`);
  }

  return (
    <div className="max-w-80 flex flex-col gap-4 rounded-md h-96 bg-gray-200 cursor-pointer hover:bg-gray-300 hover:opacity-90" onClick={handleClick}>
      <div className="relative">
        <Image className="rounded-t-md" src={blog.image} alt="post image" width={350} height={230} />
        <div className="absolute bottom-3 left-3 bg-primary rounded-md px-2 py-0.5">
          <h4 className="text-white">{blog.title}</h4>
        </div>
      </div>
      <div className="px-2">

        <span className="text-sm italic">{blog.date.toLocaleDateString()}</span>
        <p className="">{blog.description}</p> {/* TODO: review ellipsis */}
      </div>
    </div>
  )
}

export default BlogCard