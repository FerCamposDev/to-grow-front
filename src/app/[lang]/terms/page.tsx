import { dictionary } from "@/i18n";
import { LangParams } from "@/types/lang";

const TermsAndConditions = ({ params }: LangParams) => {
  const { lang = 'es' } = params;
  const wordings = dictionary[lang].termsAndConditions;

  return (
    <div className="container mx-auto px-3 my-10 mb-32">
      <div className="flex justify-center">
        <div className="w-full lg:w-10/12 text-justify">
          <h1 className="font-bold text-2xl text-black mb-7">{wordings.title}</h1>
          <div className="flex flex-col items-start justify-start col-span-12">
            <div className="text-sm text-gray-700 flex flex-col gap-4">
              <p><strong>{wordings.use.title}:</strong> {wordings.use.desc}</p>
              <p><strong>{wordings.property.title}:</strong> {wordings.property.desc}</p>
              <p><strong>{wordings.privacy.title}:</strong> {wordings.privacy.desc}</p>
              <p><strong>{wordings.third_parties.title}:</strong> {wordings.third_parties.desc}</p>
              <p><strong>{wordings.responsibility.title}:</strong> {wordings.responsibility.desc}</p>
              <p><strong>{wordings.modifications.title}:</strong> {wordings.modifications.desc}</p>
              <p><strong>{wordings.law.title}:</strong> {wordings.law.desc}</p>
              <p>{wordings.last_desc}<a className="text-blue-700" href="mailto:info@togrow.com.ar">info@togrow.com.ar</a>.</p>
              <p>{wordings.final}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
