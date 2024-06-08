import React, { DetailedHTMLProps } from 'react'

type Props = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  fullWidth?: boolean;
};

const Button = ({ fullWidth, ...props }: Props) => {
  return (
    <button
      className={`rounded-lg bg-primary hover:bg-opacity-90 active:bg-blue-500 shadow-lg text-white py-3 px-5 ${fullWidth ? 'w-auto' : 'w-fit'}`}
      {...props}
    />
  )
}

export default Button