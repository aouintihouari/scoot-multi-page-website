import { MobilityFeatures, Faqs } from "../components/AboutComponents";
import { Hero, OurValues } from "../components/UI";

const About = () => {
  return (
    <>
      <Hero
        title="About"
        mobile="./assets/images/about-hero-mobile.jpg"
        tablet="./assets/images/about-hero-tablet.jpg"
        desktop="./assets/images/about-hero-desktop.jpg"
      />
      <MobilityFeatures />
      <OurValues content="Our values" />
      <Faqs />
    </>
  );
};

export default About;
