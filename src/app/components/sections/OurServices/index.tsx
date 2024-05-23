'use client'
import { useParamsLangWordings } from '@/hooks/useParamsLangWordings';

import './our-services.css';

const OurServices = () => {
  const { wordings } = useParamsLangWordings();

  return (
    <div id="services" className="services py-10">
      <div className="container px-2 mx-auto">
        <div className="text-center pb-10 max-w-xl mx-auto">
          <h5 className="font-semibold text-primary text-xl">
            {wordings.services_section.header}
          </h5>
          <h6 className="font-semibold text-4xl">
            {wordings.services_section.title}
          </h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-code text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">{wordings.services_section.web_design}</h4>
                <p className="text-gray-500">
                  {wordings.services_section.web_design_desc}
                </p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-file-code text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">{wordings.services_section.web_development}</h4>
                <p className="text-gray-500">
                  {wordings.services_section.app_development_desc}
                </p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-external-link-alt text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">{wordings.services_section.ui_design}</h4>
                <p className="text-gray-500">
                  {wordings.services_section.ui_design_desc}
                </p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-user-secret text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">{wordings.services_section.web_security}</h4>
                <p className="text-gray-500">
                  {wordings.services_section.web_security_desc}
                </p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-envelope-open text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">{wordings.services_section.digital_marketing}</h4>
                <p className="text-gray-500">
                  {wordings.services_section.digital_marketing_desc}
                </p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-laptop text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">{wordings.services_section.app_development}</h4>
                <p className="text-gray-500">
                  {wordings.services_section.app_development_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices