'use client'
import Image from 'next/image'
import { useParamsLangWordings } from '@/hooks/useParamsLangWordings';

const FloatingWhatsapp = () => {
  const { wordings } = useParamsLangWordings();

  return (
    <a
      target="_blank"
      href={wordings.whatsapp}
      className="fixed right-7 bottom-8 z-10 hover:opacity-90"
    >
      <Image src="/img/whatsapp-logo.svg" alt="whatsapp" height={50} width={50} className="animated pulse infinite" />
    </a>
  )
}

export default FloatingWhatsapp