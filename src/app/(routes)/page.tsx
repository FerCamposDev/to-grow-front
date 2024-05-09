import Footer from "../components/footer";
import NavigationBar from "../components/navigation/NavigationBar";
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import HomeCarousel from "../components/sections/HomeCarousel";
import OurServices from "../components/sections/OurServices";
import OurTeam from "../components/sections/OurTeam";
import FloatingBackToTop from "../components/shared/FloatingBackToTop";
import FloatingWhatsapp from "../components/shared/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <main>
        <NavigationBar />
        <HomeCarousel />
        <AboutUs />
        <OurServices />
        <OurTeam />
        <ContactUs />
        
        <FloatingBackToTop />
        <FloatingWhatsapp />
      </main>
      <Footer />
    </>
  );
}
