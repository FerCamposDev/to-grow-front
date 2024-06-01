type Props = {
  children: string | string[];
  lineJump?: boolean;
}

const Description = ({ children, lineJump }: Props) => {

  const render = (child: string) => {
    return (
      <p
        className="text-xl"
        dangerouslySetInnerHTML={{ __html: child }}
      />
    );
  }

  if (Array.isArray(children)) {
    return (
      children.map((child, index) => {
        const isLast = children.length === index + 1;

        return (
          <div key={child} >
            {render(child)}
            {lineJump && !isLast && <br />}
          </div>
        )
      })
    )
  }

  return render(children);
}

export default Description