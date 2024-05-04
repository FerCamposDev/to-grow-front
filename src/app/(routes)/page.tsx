import NavigationBar from "../components/navigation/NavigationBar";
import AboutUs from "../components/sections/AboutUs";
import HomeCarousel from "../components/sections/HomeCarousel";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <HomeCarousel />
      <AboutUs />
    </main>
  );
}
