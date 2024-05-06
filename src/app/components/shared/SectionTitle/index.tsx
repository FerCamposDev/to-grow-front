import React, { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  title: string;
  description?: string;
}>;

const SectionTitle: FC<Props> = ({ title, description, children }) => {
  return (
    <div className="text-center pb-5 max-w-xl mx-auto">
      <h5 className="font-semibold text-primary text-xl">{title}</h5>
      {description && (
        <h6 className="font-semibold text-4xl">
          {description}
        </h6>
      )}
      {children}
    </div>
  )
}

export default SectionTitle