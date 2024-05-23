'use client'
import { useParamsLangWordings } from '@/hooks/useParamsLangWordings';
import { useForm } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm('mleqdozv');
  const { wordings } = useParamsLangWordings();

  if (state.succeeded) {
    return (
      <div className="h-full w-full rounded flex flex-col justify-center items-center py-5 md:p-5">
        <h4 className="text-center text-2xl font-semibold">
          {wordings.contact_success.title}
        </h4>
        <h6 className="text-center p-2 md:p-5">
          {wordings.contact_success.desc}
        </h6>
      </div>
    );
  }

  if (state.errors) {
    return (
      <div className="h-full w-full rounded flex flex-col justify-center items-center py-5 md:p-5">
        <h4 className="text-center text-red-500 text-2xl font-semibold">
          {wordings.contact_error.title}
        </h4>
        <h6 className="text-center p-2 md:p-5">
          {wordings.contact_error.desc}
        </h6>
      </div>
    )
  }

  return (
    <form className="h-full w-full py-5 px-2 md:p-5 rounded-lg bg-green-300" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-5'>
        <label className="">
          <input id="form-name" required type="text" className="form-control border-0 py-3 px-2 w-full rounded-lg" placeholder={wordings.your_name} name="name" />
        </label>
        <label className="">
          <input required type="email" className="form-control border-0 py-3 px-2 w-full rounded-lg" placeholder="Email" name="email" />
        </label>
        <label className="">
          <input id="form-project" type="text" className="form-control border-0 py-3 px-2 w-full rounded-lg" placeholder={wordings.project} name="project" />
        </label>
        <label className="">
          <textarea id="form-msg" required className="form-control border-0 py-3 px-2 w-full rounded-lg" rows={6} cols={10} placeholder={wordings.message} name="message"></textarea>
        </label>
        <div className="text-right">
          <button className="rounded-lg bg-primary hover:bg-opacity-90 shadow-lg text-white py-3 px-5" type="submit">{wordings.send_message}</button>
        </div>
      </div>
    </form>
  )
}

export default Form