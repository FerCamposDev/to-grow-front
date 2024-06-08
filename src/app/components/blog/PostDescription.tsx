type Props = {
  children: string | string[];
  lineJump?: boolean;
  className?: string;
  size?: 'base' | 'lg' | 'xl' | '2xl';
}

const Description = ({ children, lineJump, className, size = 'base' }: Props) => {

  const render = (child: string) => {
    return (
      <p
        className={`text-${size} ${className}`}
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