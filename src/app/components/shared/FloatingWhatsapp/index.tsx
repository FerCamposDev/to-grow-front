import Image from 'next/image'

type Props = {}

const FloatingWhatsapp = (props: Props) => {
  return (
    <a
      target="_blank"
      href="https://wa.me/+541150595098?text=Hello%20I'm%20interested%20in%20create%20a%20new%20project"
      className="fixed right-7 bottom-8 z-10"
    >
      <Image src="/img/whatsapp-logo.svg" alt="whatsapp" height={50} width={50} className="animated pulse infinite" />
    </a>
  )
}

export default FloatingWhatsapp