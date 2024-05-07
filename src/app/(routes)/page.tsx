import Footer from "../components/footer";
import NavigationBar from "../components/navigation/NavigationBar";
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import HomeCarousel from "../components/sections/HomeCarousel";
import OurServices from "../components/sections/OurServices";
import OurTeam from "../components/sections/OurTeam";
import FloatingWhatsapp from "../components/shared/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <main>
        <NavigationBar /> {/* TODO: review little right margin */}
        <HomeCarousel />
        <AboutUs />
        <OurServices />
        <OurTeam />
        <ContactUs />
        
        <FloatingWhatsapp />
      </main>
      <Footer />
    </>
  );
}
