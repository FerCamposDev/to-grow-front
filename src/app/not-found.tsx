import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '550px' }} className="container-fluid my-10 h-full flex justify-center items-center">
      <div className="container mx-auto text-center py-5 flex justify-center items-center">
        <div className="w-full lg:w-6/12 flex flex-col justify-center items-center gap-5">
          <i className="fas fa-exclamation-triangle text-primary text-6xl"></i>
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-4xl font-bold">Page Not Found</h2>
          <p className="text-lg text-gray-700">We’re sorry, the page you have looked for does not exist in our website!</p>
          <Link className='rounded-full py-3 px-5 font-semibold bg-primary shadow-lg hover:opacity-90 active:opacity-100' href="/">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  )
}