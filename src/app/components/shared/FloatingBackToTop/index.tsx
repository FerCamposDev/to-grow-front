import React from 'react'

type Props = {}

const FloatingBackToTop = (props: Props) => {
  return (
    <a
      href="#"
      className="hidden lg:flex btn rounded-full fixed w-12 h-12 right-7 bottom-24 z-10 bg-primary text-center p-4 hover:opacity-90"
    >
      <i className="fa fa-arrow-up text-white"></i>
    </a>
  )
}

export default FloatingBackToTop