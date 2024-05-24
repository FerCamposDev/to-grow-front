import { dictionary } from "@/i18n";
import { LangParams } from "@/types/lang";

const PoliciesPage = ({ params }: LangParams) => {
  const { lang = 'es' } = params;
  const wordings = dictionary[lang].policies;

  return (
    <main>
      <div className="container mx-auto px-3 my-10">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 text-justify">
            <h1 className="font-bold text-2xl text-black mb-7">{wordings.title}</h1>

            <div className="flex flex-col items-start justify-start col-span-12">
              <div className="text-sm text-gray-700">
                <p>{wordings.desc_part1}<strong>ToGrow</strong>{wordings.desc_part2}</p>
                
                <h4 className="font-bold text-xl text-black my-5">{wordings.info.title}</h4>
                <p>{wordings.info.desc}</p>
                
                <h4 className="font-bold text-xl text-black my-5">{wordings.use.title}</h4>
                <p>{wordings.use.desc}</p>
                <p><strong>ToGrow</strong>{wordings.use.desc2_part2}</p>
                
                <h4 className="font-bold text-xl text-black my-5">{wordings.cookies.title}</h4>
                <p>{wordings.cookies.desc1}</p>
                <p>{wordings.cookies.desc2}</p>
                <p>{wordings.cookies.desc3}</p>
                <p>{wordings.cookies.desc4}</p>
                
                <h4 className="font-bold text-xl text-black my-5">{wordings.visits.title}</h4>
                <p>{wordings.visits.desc}</p>
                
                <h4 className="font-bold text-xl text-black my-5">{wordings.third_parties.title}</h4>
                <p>{wordings.third_parties.desc}</p>
                
                <h4 className="font-bold text-xl text-black my-5">{wordings.personal_info.title}</h4>
                <p>{wordings.personal_info.desc1}</p>
                <p>{wordings.personal_info.desc2_part1}<strong>ToGrow</strong>{wordings.personal_info.desc2_part2}</p>
                <p>{wordings.personal_info.desc3} <a className="text-blue-700" href="mailto:info@togrow.com.ar">info@togrow.com.ar</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default PoliciesPage