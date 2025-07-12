import { Hero, Button, OurValues, BoxesContainer } from "../components/UI";

const Careers = () => {
  return (
    <>
      <Hero
        title="Careers"
        mobile="./assets/images/careers-location-hero-mobile.jpg"
        tablet="./assets/images/careers-locations-hero-tablet.jpg"
        desktop="./assets/images/careers-locations-hero-desktop.jpg"
      />
      <section className="mb-[25%] lg:mb-[12%] lg:px-[15%]">
        <article className="relative my-[10%] flex flex-col items-center lg:mt-[10%] lg:mb-[5%] lg:flex-row-reverse">
          <div>
            <img
              className="h-[311px] w-[311px] rounded-full sm:min-h-[445px] sm:min-w-[445px]"
              src="./assets/images/join-us.jpg"
              alt="digital era"
            />
          </div>
          <div className="my-[10%] text-center sm:my-[2%]">
            <h2 className="mono mx-auto my-[5%] w-[80%] text-[32px] leading-[32px] font-bold tracking-[-1.43px] text-[#495567] sm:my-[3%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.14px] lg:mx-0 lg:w-[60%] lg:text-left">
              Care to join our mission?
            </h2>
            <p className="lexend mx-auto w-[80%] text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:text-center lg:mx-0 lg:w-[50%] lg:text-left">
              We’re always looking for ambitious individuals to help us on our
              journey. If you’re passionate about our mission to provide clean,
              accessible transport to improve urban living we want to hear from
              you!
            </p>
          </div>
          <img
            className="absolute top-[35%] right-[-10%] sm:top-[48%] sm:right-[-2%] lg:top-[65%] lg:right-[-22%]"
            src="./assets/patterns/left-downward-arrow.svg"
            alt="left downward arrow"
          />
          <img
            className="absolute right-[-40%] -z-2 hidden sm:block lg:right-[-45%]"
            src="./assets/patterns/circle.svg"
            alt="circle"
          />
        </article>
        <div className="my-[-8%] flex">
          <Button content="Say Hello" classes="mx-auto text-center lg:mx-0" />
        </div>
      </section>
      <OurValues content="Why join us?" />
      <BoxesContainer />
    </>
  );
};

export default Careers;
