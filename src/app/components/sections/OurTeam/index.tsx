'use client'
import Image from 'next/image'
import { useParamsLangWordings } from '@/hooks/useParamsLangWordings';

import './our-team.css';

const OurTeam = () => {
  const { wordings } = useParamsLangWordings();

  return (
    <div id="team" className="team bg-gray-100 py-10">
      <div className="container px-2 mx-auto">
        <div className="text-center pb-5 max-w-xl mx-auto">
          <h5 className="font-semibold text-primary text-xl">{wordings.team_section.header}</h5>
          <h6 className="font-semibold text-4xl">
            {wordings.team_section.title}
          </h6>
        </div>
        <div className='flex flex-wrap justify-center gap-10'>
          <div className="rounded team-item">
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-full">
                  <Image
                    alt="Fernando Campos"
                    src="/img/team/fer-2.png"
                    height={250}
                    width={250}
                    className="w-50 h-50 rounded-full"
                  />
                </div>
                <div className="team-name text-center py-3">
                  <h4 className="font-semibold text-2xl">Fernando Campos</h4>
                  <p className="text-gray-500">Founder / Software Engineer</p>
                </div>
                <div className="flex justify-center pb-4">
                  <a
                    className="bg-primary text-white text-center rounded-full m-1 p-2 w-10 h-10"
                    href="https://www.linkedin.com/in/fercampos"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded team-item">
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-full">
                  <Image
                    alt="Jacqueline Lozada"
                    src="/img/team/jaky.jpeg"
                    height={250}
                    width={250}
                    className="w-50 h-50 rounded-full"
                  />
                </div>
                <div className="team-name text-center py-3">
                  <h4 className="font-semibold text-2xl">Jacqueline Lozada</h4>
                  <p className="text-gray-500">Co-Founder / {wordings.team_section.lawyer} / Software QA</p>
                </div>
                <div className="flex justify-center pb-4">
                  <a
                    className="bg-primary text-white text-center rounded-full m-1 p-2 w-10 h-10"
                    href="https://www.linkedin.com/in/jacquelinelozada"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam