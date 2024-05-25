import { LangParams } from "@/types/lang";
import AboutUs from "@/app/components/sections/AboutUs";
import ContactUs from "@/app/components/sections/ContactUs";

export default function Home({ params }: LangParams) {
  const { lang = 'es' } = params;

  return (
    <main>
      <AboutUs />
      <ContactUs />
    </main>
  );
}
