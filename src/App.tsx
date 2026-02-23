import { Footer } from "./components/basic/Footer";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/basic/Navbar";
import { WhoWheAre } from "./components/WhoWeAre";
import { Leadership } from "./components/Leadership";
import { OurServices } from "./components/OurServices";
import { ContactUs } from "./components/ContactUs";
import { OurWork } from "./components/OurWork";

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoWheAre />
      <OurServices />
      <Leadership />
      <OurWork />
      <ContactUs />
      <Footer />
    </>
  );
};
