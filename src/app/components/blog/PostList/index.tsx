import { ItemContent } from "@/types/post";
import PostItem from "./PostItem";

type Props = {
  items: ItemContent[]
  numerated?: boolean;
  gap?: number;
  lineJump?: boolean
};

const List = ({ items = [], numerated, gap = 0, lineJump }: Props) => {
  const renderItems = () => {
    return items.map((item, index) => {
      const isLast = items.length === index + 1;
      return (
        <>
          <PostItem key={item.title} item={item} />
          {!isLast && lineJump && <br/>}
        </>
      )
    })
  }

  if (numerated) {
    return (
      <ol className={`ml-8 list-decimal flex flex-col gap-${gap}`}>
        {renderItems()}
      </ol>
    )
  }

  return (
    <ul className={`ml-8 list-disc flex flex-col gap-${gap}`}>
      {renderItems()}
    </ul>
  )
}

export default List