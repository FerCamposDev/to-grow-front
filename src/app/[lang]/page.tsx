import { LangParams } from "@/types/lang";
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import HomeCarousel from "../components/sections/HomeCarousel";
import OurServices from "../components/sections/OurServices";
import OurTeam from "../components/sections/OurTeam";
import BlogSection from "../components/sections/Blog";

export default function Home({ params }: LangParams) {
  const { lang = 'es' } = params;

  return (
    <main>
      <HomeCarousel lang={lang} />
      <AboutUs />
      <OurTeam />
      <OurServices />
      <BlogSection lang={lang} />
      <ContactUs />
    </main>
  );
}
