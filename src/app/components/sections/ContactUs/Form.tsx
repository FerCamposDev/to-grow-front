'use client'
import { useForm } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm('mleqdozv');
  if (state.succeeded) {
    return (
      <div className="h-full w-full rounded flex flex-col justify-center items-center py-5 md:p-5">
        <h4 className="text-center">
          Thank you for reaching out!
        </h4>
        <h6 className="text-center p-2 md:p-5">
          We&apos;re excited to receive your message, and our team will review it shortly. We&apos;ll be in touch soon to discuss how we can assist you!
        </h6>
      </div>
    );
  }

  if (state.errors) {
    return (
      <div className="h-full w-full rounded flex flex-col justify-center items-center py-5 md:p-5">
        <h4 className="text-center text-red-500">
          Sorry! It seems there was an issue submitting the form.
        </h4>
        <h6 className="text-center p-2 md:p-5">
          Please try again or reach out to us directly at info@togrow.com.ar so we can assist you promptly. Thank you for your understanding!
        </h6>
      </div>
    )
  }

  return (
    <form className="h-full w-full py-5 px-2 md:p-5 rounded-lg bg-green-300" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-5'>
        <label className="">
          <input id="form-name" required type="text" className="form-control border-0 py-3 px-2 w-full rounded-lg" placeholder="Your Name" name="name" />
        </label>
        <label className="">
          <input required type="email" className="form-control border-0 py-3 px-2 w-full rounded-lg" placeholder="Email" name="email" />
        </label>
        <label className="">
          <input id="form-project" type="text" className="form-control border-0 py-3 px-2 w-full rounded-lg" placeholder="Project" name="project" />
        </label>
        <label className="">
          <textarea id="form-msg" required className="form-control border-0 py-3 px-2 w-full rounded-lg" rows={6} cols={10} placeholder="Message" name="message"></textarea>
        </label>
        <div className="text-right">
          <button className="rounded-lg bg-primary hover:bg-opacity-90 shadow-lg text-white py-3 px-5" type="submit">Send Message</button>
        </div>
      </div>
    </form>
  )
}

export default Form