import Footer from "../common/footer";
import HeroSection from "../common/hero-section";
import CreateSpace from "./create-space";
import Faq from "./faq";
import GallerySlider from "./gallery-slider";
import OurService from "./our-service";
import OurTeam from "./our-team";
import RecentWork from "./recent-work";
import Testinomial from "./testinomial";
import WhoWeAre from "./who-we-are";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <GallerySlider />
      <WhoWeAre />
      <OurService />
      <RecentWork />
      <Testinomial />
      <OurTeam />
      <Faq />
      <CreateSpace />
    </>
  );
};
