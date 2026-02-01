import AboutUs from "@/components/about/about-us";
import OurJourney from "@/components/about/our-journey";
import OurMission from "@/components/about/our-mission";
import OurStory from "@/components/about/out-story";
import ProvenResult from "@/components/about/proven-result";
import OurTeam from "@/components/homepage/our-team";

const page = () => {
  return (
    <>
      <AboutUs />
      <OurStory />
      <OurMission />
      <OurJourney />
      <ProvenResult />
      <OurTeam />
    </>
  );
};

export default page;
