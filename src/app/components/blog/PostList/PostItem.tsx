export type Item = {
  title: string;
  desc: string | string[];
}

type Props = {
  item: Item
}

const PostItem = ({ item }: Props) => {
  const { title, desc } = item;

  const render = (child: string) => {
    return (
      <li className="">
        <p
          className=""
          dangerouslySetInnerHTML={{ __html: `<b>${title}</b> ${child}` }}
        />
      </li>
    );
  }

  if (Array.isArray(desc)) {
    return (
      desc.map((child) => {
        return (
          <div key={child} >
            {render(child)}
          </div>
        )
      })
    )
  }

  return render(desc);
}

export default PostItem;
